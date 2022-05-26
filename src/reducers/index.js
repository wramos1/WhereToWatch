import { combineReducers } from "redux";
import paramsReducer from './paramsReducer';

export default combineReducers({
    params: paramsReducer
});