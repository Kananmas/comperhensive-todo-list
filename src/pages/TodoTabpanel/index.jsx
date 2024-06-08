// components
import { Box, Tab, Tabs } from "@mui/material";
import { StepsTable } from "./components/StepsTable";
import { FormGenerator } from "../../components/FormGenerator";
import { TabPanel } from "./components/TabPanel";
import { StepsTimeline } from "./components/TimeLine";
import { StepsCalender } from "./components/Calender";

// form
import { todoForm } from "../../utils/todo-form.utils";

// hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// services
import { assignSelectedTodoSteps } from "./services/assign-selected-todo-steps.service";

// actions
import { setSelectedTodo, setTodosAction } from "../../store/todo/todo.actions";
import { useDictionary } from "../../hooks/dictionary.hook";
import { useError } from "../../hooks/error.hook";
import { TodoService } from "../../services/todo.service";
import { changeUpdatedTodo } from "./utils/change-updated-todo.utils";


const formStyles = { width: "50%", marginLeft: "auto", marginRight: "auto", textAlign: "center" }
const tableStyles = { width: "80%", marginLeft: "auto", marginRight: "auto" };


export function TodoTabpanel() {
    const [state, setState] = useState(0);
    const { getWord } = useDictionary();
    const data = useSelector((store) => store.todo.selectedTodo.todo);
    const params = useParams();
    const dispatch = useDispatch();
    const { setValue } = useError();

    const reformedData = (() => {
        const result = {};
        for (const key in data) {
            result[key] = data[key];
            if (typeof data[key] === "string" && key.toLowerCase().endsWith("date"))
                result[key] = new Date(data[key]).toString();
        }
        return result;
    })()

    const handleChangeTab = (e, newVal) => {
        setState(newVal)
    }

    useEffect(() => {
        if (!Object.entries(data).length) {
            const { id } = params;
            assignSelectedTodoSteps(id).then((data) => {
                dispatch(setSelectedTodo(data))
            }).catch((e) => setValue(e))
        }
    }, [data])

    async function handleSubmit(formData) {
        try {
            var todoService = new TodoService();
            var res = await todoService.putTodoByData(formData);
            var newTodos = changeUpdatedTodo(data, res)
            dispatch(setTodosAction(newTodos))
        } catch (e) {
            setValue(e)
        }
    }

    return <Box>
        <Tabs value={state} onChange={handleChangeTab}>
            <Tab label={getWord("edittodo")} value={0} />
            <Tab label={getWord("todosteps")} value={1} />
            <Tab label={getWord("timeline")} value={2} />
            <Tab label={getWord("calender")} value={3} />
        </Tabs>
        <TabPanel selectedTab={0} tabValue={state}>
            <Box sx={formStyles}>
                <FormGenerator fields={todoForm(reformedData)} onSubmit={handleSubmit} />
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