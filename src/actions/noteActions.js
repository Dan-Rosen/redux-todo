import { ADD_NOTE, GET_NOTES } from "./types"

export const getNotes = () => {
    return { type: GET_NOTES }
}

// export const addNote = (note) => async (dispatch) => {
//     console.log(note)
//     dispatch({ type: ADD_NOTE, payload: note })
// }

export const addNote = (note) => {
    return { type: ADD_NOTE, payload: note }
}
