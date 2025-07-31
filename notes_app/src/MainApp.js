import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"
import {
    query,
    where,
    onSnapshot,
    addDoc,
    doc,
    deleteDoc,
    setDoc
} from "firebase/firestore"
import {notesCollection, db} from "./firebase"

export default function MainApp({ user }) {
    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState("")
    const [tempNoteText, setTempNoteText] = React.useState("")

    const currentNote = notes.length > 0
        ? (notes.find(note => note.id === currentNoteId) || notes[0])
        : null

    const sortedNotes = notes.sort((a,b) => b.updatedAt - a.updatedAt)

    React.useEffect(() => {
        if (!user) return

        const q = query(notesCollection, where("uid", "==", user.uid))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const notesArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setNotes(notesArr)
        })

        return unsubscribe
    }, [user])

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
            if (currentNote && tempNoteText !== currentNote.body) {
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
            updatedAt: Date.now(),
            uid: user.uid
        }
        try {
            const newNoteRef = await addDoc(notesCollection, newNote)
            setCurrentNoteId(newNoteRef.id)
        } catch (err) {
            console.error("❌ Failed to create note:", err.message)
            alert("❌ Failed to create note: " + err.message)
        }
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
