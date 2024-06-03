import { useMemo } from "react";
import { useWindow } from "./window.hook";

export function useProportion(customSize=0) {
    const {width , height} = useWindow();


    const proportions = useMemo(() => {
        return {
            pWidth:(customSize/1920)*width + "px",
            pHeight:(customSize/1080)*height + "px",
            custom:(size=0) =>  {
                return {
                    width:(size/1920)*width + "px",
                    height:(size/1080)*height + "px",
                }
            }
        }
    } , [width , height])


    return proportions;
}