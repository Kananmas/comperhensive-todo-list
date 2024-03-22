import { CLEAR_TODOS, REMOVE_TODO, SET_SELECTED_TODO, SET_TODO, SET_TODOS } from "./todo.constants";

export const initialState = {
    todos : [],
    selectedTodo:{
        todo:{},
        todoStops:[],
    }
}



export const todosReducer = (state = initialState , action) => {
    switch(action.type) {
        case SET_TODOS:
            return {...state , todos:action.payload};
        case REMOVE_TODO:
            return {...state, todos:state.todos.filter((todo) => todo !== action.payload)}
        case CLEAR_TODOS:
            return {...initialState};
        case SET_TODO:
            return {...state , todos:[...state.todos , action.payload]}
        case SET_SELECTED_TODO:
            return {...state , selectedTodo:action.payload}
        default:
            return {...initialState}
    }
}