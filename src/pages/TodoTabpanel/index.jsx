import { Box, Tab, Tabs } from "@mui/material";
import { StepsTable } from "./components/StepsTable";
import { FormGenerator } from "../../components/FormGenerator";
import { todoForm } from "../../utils/todo-form.utils";
import { useState } from "react";
import { TabPanel } from "./components/TabPanel";
import { useSelector } from "react-redux";
import { StepsTimeline } from "./components/TimeLine";

const formStyles = { width: "50%", marginLeft: "auto", marginRight: "auto", textAlign: "center" }
const tableStyles = { width: "80%", marginLeft: "auto", marginRight: "auto" };


export function TodoTabpanel() {
    const [state, setState] = useState(0);
    const data = useSelector((store) => store.todo.selectedTodo.todo);
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
                <FormGenerator fields={todoForm(data)} onSubmit={() => { }} />
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
    </Box>
}