import { useContext } from "react";
import { errorContext } from "../context/exception/error.context";

export function useError() {
    const context = useContext(errorContext);


    return context;
}