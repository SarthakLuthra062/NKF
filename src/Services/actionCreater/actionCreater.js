import { INSERT_DROPDOWN_DATA } from "../actions/actions"


const insertDData = (data) => {
    return {
        type: INSERT_DROPDOWN_DATA,
        data
    }
}

export default insertDData