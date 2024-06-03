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
        },
        translateDate(date) {
            var format = "en-GB"
            const lang = context.lang;

            if(lang == "fa") {
                format = "fa-IR"
            }
            if(lang == "CN") {
                format = "zh-cn"
            }
            if(date instanceof Date) {
                return date.toLocaleDateString(format)
            }

            return new Date(date).toLocaleDateString(format)
        }
    }

}