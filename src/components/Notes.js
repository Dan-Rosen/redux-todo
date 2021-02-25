import React, { useSelector } from "react"
import Note from "./Note"

function Notes() {
    const notes = useSelector((state) => state.notes)

    return (
        <div>
            <h2>My Notes:</h2>
            {notes.notes.map((note) => (
                <Note title={note.title} note={note.note} />
            ))}
        </div>
    )
}

export default Notes
