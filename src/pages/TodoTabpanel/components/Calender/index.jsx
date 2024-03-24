import { Calendar } from "antd"
import { CalenderCell } from "./components/CalenderCell"



export const StepsCalender = () => {
    return <Calendar cellRender={CalenderCell}/>
}