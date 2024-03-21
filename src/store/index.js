import { initialState as authIntialState } from "./auth/auth.reducers";
import { initialState as todoInitialState } from "./todo/todo.reducer";

import { createStore } from "redux";
import { reducers } from "./index.reducer";

const storeType = {
    todo:todoInitialState,
    auth:authIntialState,
}


/**
 * @param {storeType} store;
 */

export const store = createStore(reducers)