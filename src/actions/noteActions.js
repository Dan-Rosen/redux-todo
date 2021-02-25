import { ADD_NOTE, GET_NOTES } from "./types"

export const getNotes = () => {
    return {
        type: GET_NOTES
    }
}

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    }
}
