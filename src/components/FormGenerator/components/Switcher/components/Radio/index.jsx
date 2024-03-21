import { FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material"
import { randomString } from "../../../../../../utils/random-string.utils"

export const Radio = ({ options = [], title, defaultValue, onChange, name }) => {
    const labelId = randomString();
    
    return <FormControl onChange = {onChange}>
    <FormLabel id={labelId}>{title}</FormLabel>
    <RadioGroup defaultValue={defaultValue} aria-labelledby={labelId} name={name}>
        {options.map((option) => <FormControlLabel key={randomString()} value={option.value} control={<Radio />}  label={option.value}/>)}
    </RadioGroup>
    </FormControl>
}