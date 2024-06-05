import { Box, InputLabel, TextareaAutosize } from "@mui/material"
import { randomString } from "../../../../../../utils/random-string.utils"
import { Select as MUISelect } from "@mui/material"
import { useDictionary } from "../../../../../../hooks/dictionary.hook";

export const Textarea = ({ title, defaultValue, onChange, name }) => {
    const labelId = randomString();
    const { getWord } = useDictionary();

    const selectListId = randomString();
    return <Box sx={{ padding: "14px" }}>
        <InputLabel id={labelId}>{getWord(title) ?? getWord(name) ?? title}</InputLabel>
        <TextareaAutosize name={name}
            style={{minHeight:"100px" , marginTop:"2px"}}
            labelId={labelId}
            label={title}
            id={selectListId}
            defaultValue={defaultValue}
            onChange={onChange}>
        </TextareaAutosize>
    </Box>
}