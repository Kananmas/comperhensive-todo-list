
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect, useMemo } from "react";


const publicPaths = ['/signin', '/signup']

export const useCheckAuth = () => {
    const path = useLocation();
    const nav = useNavigate();
    const authState = useSelector((store) => store.auth)

    const isAuthorized = useMemo(() => {
        if (publicPaths.includes(path.pathname)) return true;
        return authState.authorized
    }, [path, authState])

    useEffect(() => {
        if (isAuthorized) return;
        if (!isAuthorized && !publicPaths.includes(path.pathname)) {
            nav("/signin")
        }
    }, [isAuthorized, path])

}