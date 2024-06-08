import { useContext, useEffect } from "react";
import { dictionaryContext } from "../context/dictionary/dictionary.context";

export function useDictionary(word) {
    const [context, setContext = () => { }] = useContext(dictionaryContext);
    function getDateFormat() {
        var format = "en-GB"
        const lang = context.lang;

        if (lang == "fa") {
            format = "fa-IR"
        }
        if (lang == "CN") {
            format = "zh-cn"
        }

        return format;
    }
    useEffect(() => {
        const lang = localStorage.getItem("lang")
        const contextLang = context.lang;
        if(lang == null) {
            localStorage.setItem("lang" , contextLang);
            return;
        }
        if (lang != contextLang) {
            var newContext = { ...context, lang: lang };
            setContext(() => newContext);
        }
    }, [])

    return {
        changeLang(newLang = "en") {
            const lang = context.lang;
            if (lang == newLang) return;
            localStorage.setItem("lang" , newLang);
            var newContext = { ...context, lang: newLang };
            setContext(() => newContext);
        },
        getWord(word = "") {
            const lang = context.lang;
            return context.words[lang][word.toLowerCase()]
        },
        getLang() {
            return context.lang;
        },
        getDateFormat,
        translateDate(date) {
            var format = getDateFormat();
            if (date instanceof Date) {
                return date.toLocaleDateString(format)
            }

            return new Date(date).toLocaleDateString(format)
        },
    }

}