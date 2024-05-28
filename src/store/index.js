import { createStore } from "redux";
import { reducers } from "./index.reducer";

/**
 * @param {storeType} store;
 */

export const store = createStore(reducers)