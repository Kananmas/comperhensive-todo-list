// components
import { Calendar } from "antd"
import { CalenderCell } from "./components/CalenderCell"
import { Box } from "@mui/material"
import { CalenderCellShow } from "./components/CalenderCellShow"



export const StepsCalender = () => {
    return <Box sx={{padding:" 0 22px"}}>
        <Calendar onSelect={CalenderCellShow} cellRender={CalenderCell} />
    </Box>
}