import { Box, Tab, Tabs } from "@mui/material";
import { StepsTable } from "./components/StepsTable";
import { FormGenerator } from "../../components/FormGenerator";
import { TabPanel } from "./components/TabPanel";
import { StepsTimeline } from "./components/TimeLine";
import { StepsCalender } from "./components/Calender";

import { todoForm } from "../../utils/todo-form.utils";


import { useSelector } from "react-redux";
import { useState } from "react";


const formStyles = { width: "50%", marginLeft: "auto", marginRight: "auto", textAlign: "center" }
const tableStyles = { width: "80%", marginLeft: "auto", marginRight: "auto" };


export function TodoTabpanel() {
    const [state, setState] = useState(0);
    const data = useSelector((store) => store.todo.selectedTodo.todo);
    const reformedData = (()=>{
        const result = {};
        for(const key in data) {
            result[key] = data[key];
            if(typeof data[key] === "string" && key.toLowerCase().endsWith("date"))
            result[key] = new Date(data[key]).toString();
        }
        return result;
    })()
    
    const handleChangeTab = (e, newVal) => {
        setState(newVal)
    }
   
    return <Box>
        <Tabs value={state} onChange={handleChangeTab}>
            <Tab label="Edit Todo" value={0}/>
            <Tab label="Todo Steps" value={1}/>
            <Tab label="Time line" value={2}/>
            <Tab label="Calender" value={3}/>
        </Tabs>
        <TabPanel selectedTab={0} tabValue={state}>
            <Box sx={formStyles}>
                <FormGenerator fields={todoForm(reformedData)} onSubmit={() => { }} />
            </Box>
        </TabPanel>
        <TabPanel selectedTab={1} tabValue={state}>
            <Box sx={tableStyles}>
                <StepsTable />
            </Box>
        </TabPanel>
        <TabPanel selectedTab={2} tabValue={state}>
            <StepsTimeline />
        </TabPanel>
        <TabPanel selectedTab={3} tabValue={state}>
            <StepsCalender />
        </TabPanel>
    </Box>
}