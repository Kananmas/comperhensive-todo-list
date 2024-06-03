import { Box, InputLabel, Input as MUIInput } from "@mui/material";
import { randomString } from "../../../../../../utils/random-string.utils";
import { useDictionary } from "../../../../../../hooks/dictionary.hook";

export function Input({ title, type, defaultValue, onChange, name }) {
    const labelId = randomString();
    const selectListId = randomString();
    
    const {getWord} = useDictionary();


    return <Box sx={{ padding: "14px" }}>
        <InputLabel id={labelId}>{getWord(title) ?? getWord(name)  ?? title}</InputLabel>
        <MUIInput name={name}
            label={title}
            type={type}
            id={selectListId}
            defaultValue={defaultValue}
            onChange={onChange} />
    </Box>
}