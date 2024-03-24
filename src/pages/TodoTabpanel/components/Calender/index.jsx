import { Calendar } from "antd"
import { CalenderCell } from "./components/CalenderCell"
import { Box } from "@mui/material"



export const StepsCalender = () => {
    return <Box sx={{padding:" 0 22px"}}>
        <Calendar cellRender={CalenderCell} />
    </Box>
}