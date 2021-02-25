import React from "react"
import styles from "./styles/NoteStyles"

function Note(props) {
    return (
        <div style={styles.Notes}>
            <strong>{props.title}</strong>
            <br />
            <hr style={styles.Line} />
            {props.note}
        </div>
    )
}

export default Note
