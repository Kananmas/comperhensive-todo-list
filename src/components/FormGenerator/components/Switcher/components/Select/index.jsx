import { InputLabel, MenuItem } from "@mui/material"
import { randomString } from "../../../../../../utils/random-string.utils"

export const Select = ({ options = [], title, defaultValue, onChange, name }) => {
    const labelId =  randomString();
    const selectListId = randomString();
    return <>
        <InputLabel id={labelId}>{title}</InputLabel>
        <Select name={name} label={title} id={selectListId} defaultValue={defaultValue} onChange={onChange}>
            {options.map((item) => <MenuItem value={item.value ?? item}>{item.text ?? item}</MenuItem>)}
        </Select>
    </>
}