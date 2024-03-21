import { CLEAR_AUTH_STATE, SET_AUTH_STATE } from "./auth.constants";

export const setAuthStateAction = (payload) => ({
    type: SET_AUTH_STATE,
    payload,
})


export const clearAuthStateAction = () => ({
    type:CLEAR_AUTH_STATE,
})