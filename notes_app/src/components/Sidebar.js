import React from "react"
import Signout from "./Signout"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button
                    className="delete-btn"
                    onClick={() => props.deleteNote(note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section 
            className="pane sidebar" 
            style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between",
                height: "100vh",
                overflow:"hidden"
            }}
        >
            <div style={{ overflow: "auto" }}>
                <div className="sidebar--header">
                    <h3>Notes</h3>
                    <button className="new-note" onClick={props.newNote}>+</button>
                </div>
                {noteElements}
            </div>

            <div style={{ padding: "1rem" }}>
                <Signout onSignout={() => window.location.reload()} />
            </div>
        </section>
    )
}
