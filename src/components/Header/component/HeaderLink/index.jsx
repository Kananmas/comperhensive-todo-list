import { baseLinkStyles } from "./index.styles" 

export const HeaderLink = ({ path, name, sx = null }) => {
    return <a style={{ ...baseLinkStyles, ...sx ?? {} }}
        href={path}>{name.toUpperCase()}</a>
}