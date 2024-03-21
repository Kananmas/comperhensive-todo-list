import { Box, InputLabel, Input as MUIInput } from "@mui/material";
import { randomString } from "../../../../../../utils/random-string.utils";

export function Input({ title , type , defaultValue, onChange, name }) {
    const labelId = randomString();
    const selectListId = randomString();

    return <Box sx={{padding:"14px"}}>
        <InputLabel id={labelId}>{title}</InputLabel>
        <MUIInput name={name}
            label={title}
            type={type}
            id={selectListId}
            defaultValue={defaultValue}
            onChange={onChange} />
    </Box>
}