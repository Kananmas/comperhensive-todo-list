import { useContext } from "react";
import { dictionaryContext } from "../context/dictionary.context";

export function useDictionary(word) {
    const [context , setContext=()=>{}] = useContext(dictionaryContext);

    return {
        changeLang(newLang = "en") {
            const lang  = context.lang;
            if(lang == newLang) return;
            var newContext = {...context , lang:newLang};
            setContext(() => newContext);
        },
        getWord(word="") {
            const lang  = context.lang;
            return context.words[lang][word.toLowerCase()]
        },
        getLang() {
            return context.lang;
        }
    }

}