import { createStore } from "redux";
import insertDataReducer from '../Services/reducers/reducer'

const store = createStore(insertDataReducer)

export default store