import { CLEAR_SELECTED_TODO, CLEAR_TODOS, REMOVE_TODO, SET_SELECTED_TODO, SET_TODO, SET_TODOS } from "./todo.constants";

export function setTodoAction(payload) {
    return {
        type:SET_TODO,
        payload
    }
}


export function setTodosAction(payload) {
    return {
        type:SET_TODOS,
        payload
    }
}

export function clearTodosAction() {
    return {
        type:CLEAR_TODOS,
    }
}

export function removeTodoAction(payload) {
    return {
        type:REMOVE_TODO,
        payload
    }
}

export function setSelectedTodo(payload) {
    return {
        type:SET_SELECTED_TODO,
        payload
    }
}

export function clearSelectedTodo() {
    return {
        type:CLEAR_SELECTED_TODO
    }
}