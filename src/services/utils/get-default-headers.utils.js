import { getJwt } from "./get-jwt.utils"

export const getDefaultHeaders = () => {
    return {
        Authorization:getJwt(),
    }
}