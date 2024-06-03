import { useMemo } from "react";
import { useWindow } from "./window.hook";

export function useProportion(customSize=0) {
    const {width , height} = useWindow();


    const proportions = useMemo(() => {
        return {
            pWidth:(customSize/2048)*width ,
            pHeight:(customSize/1080)*height ,
            custom:(size=0) =>  {
                return {
                    width:(size/2048)*width ,
                    height:(size/1080)*height ,
                }
            }
        }
    } , [width , height])


    return proportions;
}