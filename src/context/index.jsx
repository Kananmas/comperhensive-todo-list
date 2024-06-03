import { dictionaryContext as DictionaryContext, context} from "./dictionary.context"

export function DictionaryProvider({children}) {
    const states = useState(context)

    return <DictionaryContext.Provider value={[...states]}>
        {children}
    </DictionaryContext.Provider>
}