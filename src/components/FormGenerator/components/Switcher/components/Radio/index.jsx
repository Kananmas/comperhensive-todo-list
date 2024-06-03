import { FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material"
import { randomString } from "../../../../../../utils/random-string.utils"
import { Radio as MUIRadio } from "@mui/material"
import { useDictionary } from "../../../../../../hooks/dictionary.hook";

export const Radio = ({ options = [], title, defaultValue, onChange, name }) => {
    const labelId = randomString();
    const { getWord } = useDictionary();

    return <FormControl onChange={onChange} sx={{ padding: "14px" }}>
        <FormLabel id={labelId}>{getWord(title) ?? getWord(name)  ?? title}</FormLabel>
        <RadioGroup defaultValue={defaultValue} aria-labelledby={labelId} name={name}>
            {options.map((option) => <FormControlLabel
                key={randomString()}
                value={option.value}
                control={<MUIRadio />}
                label={option.value} />)}
        </RadioGroup>
    </FormControl>
}