import { FormGroup } from "@mui/material";
import { Switcher } from "./components/Switcher";
import { randomString } from "../../utils/random-string.utils";
import { useEffect, useState } from "react";

export function FormGenerator({fields=[] , onSubmit}) {
    const [formData , setFormData] =  useState({});
    let formDataCopy = {...formData};

    useEffect(() => {
        const defaultData = {};
        for(const field of fields) {
            defaultData[field.name] = field.defaultValue ?? "";
        }
        setFormData(defaultData);
        formDataCopy = defaultData;
    },[])

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        const updatedData = {...formData , [name]:value};
        formDataCopy = updatedData;
    }

    const handleOnSubmit = () => {
        onSubmit(formDataCopy);
    }

    return <FormGroup onSubmit={handleOnSubmit}>
        {
            fields.map((item) => <Switcher key={randomString()} {...item} onChange={onChange}/>)
        }
    </FormGroup>
}