import { useEffect, useState } from "react";

export function useWindow() {
    const [dimentions , setDimentions]  = useState({
        width:window.innerWidth,
        height:window.innerHeight,
    });


    useEffect(() => {
        const watchWindow = () => {
            setDimentions(() => ({
                width:window.innerWidth,
                height:window.innerHeight
            }))
        }

        window.addEventListener("resize" , watchWindow);

        return () => {
            window.removeEventListener("resize" , watchWindow)
        }
    },[])



    return dimentions
}