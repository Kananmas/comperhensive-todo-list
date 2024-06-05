import { TextareaAutosize } from "@mui/material";
import { DateInput } from "./components/DateInput";
import {Input} from "./components/Input"
import { Radio } from "./components/Radio";
import { Select } from "./components/Select";
import { Textarea } from "./components/Textarea";

export function Switcher(field) {
    const type = field.type;
    switch(type) {
        case "select":
            return <Select {...field} />
        case "radio":
            return <Radio {...field} />
        case "date":
            return <DateInput {...field} />
        case "textarea":
            return <Textarea {...field  } />
        default : 
            return <Input {...field}/>
    }
}