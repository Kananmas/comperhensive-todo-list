import { useEffect } from "react"
import { checkForJwt } from "../utils/check-for-jwt.utils"
import { useLocation } from "react-router-dom"

export const useCheckAuth = () => {
    const path = useLocation();
    useEffect(() => {
        checkForJwt();
    },[path])
}