import { Box, InputLabel, Input } from "@mui/material";
import { randomString } from "../../../../../../utils/random-string.utils";
import { useDictionary } from "../../../../../../hooks/dictionary.hook";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(customParseFormat)

export function DateInput({ title, defaultValue, onChange, name }) {
    const labelId = randomString();
    const { getWord, getDateFormat } = useDictionary();

    return <Box sx={{ padding: "14px" }}>
        <InputLabel id={labelId}>{getWord(title) ?? getWord(name) ?? title}</InputLabel>
        <Input
            type="date"
            onChange={onChange}
            value={makeDateStandard(defaultValue , getDateFormat)}
        />
    </Box>
}


function makeDateStandard(date, getDateFormat) {
    if (date == null) return
    var str = new Date(date).toLocaleDateString(getDateFormat())
        .replace("/", "-").replace("/", "-");
    const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

    if (getDateFormat().startsWith("fa")) str = p2e(str)
    var result = str.split("-").map((item) => {
        if(item.length == 1) return "0" + item;
        return item;
    })

    if(getDateFormat().startsWith("en"))
        result = result.reverse();
    
    return result.join("-").trim();
}