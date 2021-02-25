import { ADD_NOTE, GET_NOTES } from "../actions/types"

const initialState = {
    notes: []
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return { notes: state.notes }
        case ADD_NOTE:
            return { notes: [...state.notes, action.payload] }
        default:
            return state
    }
}

export default noteReducer
