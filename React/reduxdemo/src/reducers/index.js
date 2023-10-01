import { combineReducers } from "redux";
import counterReducer from './counterReducer';
import userReducer from "./userReducer";

const rootReducer=combineReducers({
    counterReducer:counterReducer,
    userReducer: userReducer,
})

export default rootReducer;