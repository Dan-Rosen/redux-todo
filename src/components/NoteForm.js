import React, { useState, useDispatch } from "react"
import styles from "./styles/NoteFormStyles"
import { addNote } from "../actions/noteActions"

function NoteForm() {
    const dispatch = useDispatch()

    const [note, setNote] = useState({
        title: "",
        note: ""
    })

    function handleChange(e) {
        let newNote = e.target
        setNote({ ...note, [newNote.name]: newNote.value })
    }

    return (
        <div style={styles.NoteForm}>
            <h2>Write a New Note:</h2>
            <form onSubmit={() => dispatch(addNote(note))}>
                <input
                    placeholder="Enter title here..."
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                />
                <br />
                <input
                    placeholder="Enter note here..."
                    name="note"
                    value={note.note}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button type="submit">Add Note</button>
            </form>
            <h2>Note Preview:</h2>
            <strong>{note.title}</strong>
            <br />
            {note.note}
        </div>
    )
}

export default NoteForm
