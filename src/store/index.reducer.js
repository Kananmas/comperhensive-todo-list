import { combineReducers } from "redux";
// reducers
import { todosReducer } from "./todo/todo.reducer";
import { authReducer } from "./auth/auth.reducers";

export const reducers = combineReducers({
    todo:todosReducer,
    auth:authReducer
})