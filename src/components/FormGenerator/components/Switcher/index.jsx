import {Input} from "./components/Input"
import { Radio } from "./components/Radio";
import { Select } from "./components/Select";

export function Switcher(field) {
    const type = field.type;
    switch(type) {
        case "select":
            return <Select {...field} />
        case "radio":
            return <Radio {...field} />
        default : 
            return <Input {...field}/>
    }
}