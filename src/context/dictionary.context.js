import { createContext } from "react";

const response = await fetch();
const result = await response.json();

const dictionaryContext = createContext({
    data:result,
    lang:"en",
});