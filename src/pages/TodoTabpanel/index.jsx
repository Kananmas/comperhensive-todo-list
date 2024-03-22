import { Box, Tab, Tabs } from "@mui/material";
import { StepsTable } from "./components/StepsTable";
import { FormGenerator } from "../../components/FormGenerator";
import { todoForm } from "../../utils/todo-form.utils";
import { useState } from "react";
import { TabPanel } from "./components/TabPanel";
import { useSelector } from "react-redux";

export function TodoTabpanel() {
    const [state, setState] = useState(0);
    const data = useSelector((store) => store.todo.selectedTodo.todo);
    debugger;
    const handleChangeTab = (e, newVal) => {
        setState(newVal)
    }

    return <Box>
        <Tabs value={state} onChange={handleChangeTab}>
            <Tab label="Edit Todo" value={0}>
            </Tab>
            <Tab label="Todo Steps" value={1}>
            </Tab>
        </Tabs>
        <TabPanel selectedTab={0} tabValue={state}>
            <Box sx={{ width: "50%", marginLeft: "auto", marginRight: "auto"  , textAlign:"center"}}>
                <FormGenerator fields={todoForm(data)} onSubmit={() => { }} />
            </Box>
        </TabPanel>
        <TabPanel selectedTab={1} tabValue={state}>

            <StepsTable />
        </TabPanel>
    </Box>
}