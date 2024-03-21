import { InputLabel, Input as MUIInput } from "@mui/material";
import { randomString } from "../../../../../../utils/random-string.utils";

export function Input({ title, defaultValue, onChange, name }) {
    const labelId = randomString();
    const selectListId = randomString();

    return <>
        <InputLabel id={labelId}>{title}</InputLabel>
        <MUIInput name={name}
            label={title}
            id={selectListId}
            onChange={onChange} />
    </>
}