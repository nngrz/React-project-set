import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"
import {
    onSnapshot, 
    addDoc, 
    doc, 
    deleteDoc,
    setDoc
} from "firebase/firestore"
import {notesCollection, db} from "./firebase"

export default function App() {
    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState("")
    const [tempNoteText, setTempNoteText] = React.useState("")

    const currentNote = 
        notes.find(note => note.id === currentNoteId) 
        || notes[0]

    const sortedNotes = notes.sort((a,b) => b.updatedAt - a.updatedAt)

    React.useEffect(() => {
        // onSnapshot sets up a real-time listener, syncing local notes array with the latest data from Firestore
        const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
            // Sync up the local notes array with the snapshot data
            const notesArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setNotes(notesArr)
        })
        return unsubscribe
    }, [])
    
    // if the currentNoteId is not defined, then set up the current note id to the first note in the notes array
    React.useEffect(() => {
        if (!currentNoteId) {
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes])

    React.useEffect(() => {
        // if the current note is ture, set the temporary note text as the current note body
        if (currentNote) {
            setTempNoteText(currentNote.body)
        }
    },[currentNote]) // to re-run the effect function everytime when the current note changes

    React.useEffect(() => {
        // set the timeout by 500 millisecond
        const timeoutId = setTimeout(() => {
            // if the temporary note text is different from the current note body, update the current note's body with the new tempNoteText
            if (tempNoteText !== currentNote.body) {
                updateNote(tempNoteText)
            }
        }, 500)
        // if the Editor component re-renders or unmounts before the timeout finishes, then clear the previous timer
        return () => clearTimeout(timeoutId)
    }, [tempNoteText]) // to re-run the effect function everytime when the temporary note text changes
    
    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
        // addDoc generates a new note ID for the "newNote", add the "newNote" to the "notesCollection" in firebase
        const newNoteRef = await addDoc(notesCollection, newNote)
        // set the current note id of the newly created note
        setCurrentNoteId(newNoteRef.id)
    }
    
    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId)
        await setDoc(
            docRef, 
            {body: text, updatedAt: Date.now()}, 
            {merge: true})
    }

    async function deleteNote(noteId) {
        const docRef = doc(db, "notes", noteId)
        await deleteDoc(docRef)
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={sortedNotes}
                    currentNote={currentNote}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                <Editor 
                    tempNoteText={tempNoteText}
                    setTempNoteText={setTempNoteText} 
                />
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>            
        }
        </main>
    )
}
