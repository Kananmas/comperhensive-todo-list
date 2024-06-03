import { Box, InputLabel, MenuItem } from "@mui/material"
import { randomString } from "../../../../../../utils/random-string.utils"
import {Select as MUISelect} from "@mui/material"
import { useDictionary } from "../../../../../../hooks/dictionary.hook";

export const Select = ({ options = [], title, defaultValue, onChange, name }) => {
    const labelId =  randomString();
    const { getWord } = useDictionary();

    const selectListId = randomString();
    return <Box sx={{padding:"14px"}}>
        <InputLabel id={labelId}>{getWord(title) ?? getWord(name)  ?? title}</InputLabel>
        <MUISelect name={name} 
        labelId={labelId}  
        label={title}
        id={selectListId} 
        defaultValue={defaultValue}
         onChange={onChange}>
            {options.map((item) => <MenuItem key={randomString()} 
            value={item.value ?? item}>{item.text ?? item}</MenuItem>)}
        </MUISelect>
    </Box>
}