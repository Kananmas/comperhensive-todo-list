import { useContext } from "react";
import { dictionaryContext } from "../context/dictionary.context";

export function useDictionary(word) {
    const [context , setContext=()=>{}] = useContext(dictionaryContext);

    const lang = context.context.lang;

    return {
        changeLang(newLang = "en") {
            if(lang == newLang) return;
            var newContext = {...context , lang:newLang};
            setContext(() => newContext);
        },
        getWord(word) {
            return context[lang][word]
        }
    }

}