import { useDictionary } from "../../../../hooks/dictionary.hook"
import { baseLinkStyles } from "./index.styles" 

export const HeaderLink = ({ path, name, sx = null }) => {
    const {getWord} = useDictionary()
    return <a style={{ ...baseLinkStyles, ...sx ?? {} }}
        href={path}>{getWord(name) ?? name}</a>
}