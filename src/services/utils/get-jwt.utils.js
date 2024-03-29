import {store} from "../../store"

export const getJwt = function () {
    return localStorage.getItem("access-token");
}