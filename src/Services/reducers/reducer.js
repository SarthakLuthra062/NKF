import { INSERT_DROPDOWN_DATA } from "../actions/actions"

const initState = []
const insertDataReducer = (state = initState, action) => {
    return { ...state, ...action.data }
}

export default insertDataReducer