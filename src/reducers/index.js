import { combineReducers } from "@reduxjs/toolkit";
import changeTodoText from './AddListReducer';
import handleUserData from './AddUserReducer';

const rootreducer = combineReducers({
    changeTodoText,
    handleUserData
})

export default rootreducer