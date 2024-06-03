
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { checkForJwt } from "../utils/check-for-jwt.utils";


const publicPaths = ['/signin', '/signup']

export const useCheckAuth = () => {
    const path = useLocation();
    const nav = useNavigate();
    const hasJwt = localStorage.getItem("access-token") !== null;

    useEffect(() => {
        checkForJwt();
    },[])

    useEffect(() => {
        if (!hasJwt ) {
            if(publicPaths.includes(path.pathname)) return;
            nav("/signin")
            return;
        }
        if(publicPaths.includes(path.pathname)) {
            nav("/")
        }
    }, [path])

}