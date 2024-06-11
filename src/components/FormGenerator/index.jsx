import { Box, Button } from "@mui/material";
import { Switcher } from "./components/Switcher";
import { randomString } from "../../utils/random-string.utils";
import { useEffect } from "react";
import { Upload } from "@mui/icons-material";



export function FormGenerator({ fields = [], onSubmit  , sx , loading}) {
    let formData = {};


    useEffect(() => {
        const defaultData = {};
        for (const field of fields) {
            defaultData[field.name] = field.defaultValue ?? "";
        }
        formData = defaultData;
    }, [])

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        const updatedData = { ...formData, [name]: value };
        formData = updatedData;
    }

    const handleOnSubmit = () => {
        onSubmit(formData);
    }

    return <Box >
        <Box sx={sx}>
            {
                fields.map((item) => 
                <Switcher 
                key={randomString()} 
                {...item} 
                onChange={onChange} />)
            }
        </Box>
        <Box sx={{marginTop:"12px" , textAlign:"center"}}>
            <Button type="submit" onClick={handleOnSubmit} disable={loading}>
                <Upload />
            </Button>
        </Box>

    </Box>
}