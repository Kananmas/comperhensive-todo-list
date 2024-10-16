//hooks
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useError } from "../../hooks/error.hook";

//components
import { TodoTable } from "./components/TodoTable";
import { FormDialog } from "./components/FormDialog";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

//services
import { TodoService } from "../../services/todo.service";

//cations
import { setTodosAction } from "../../store/todo/todo.actions";

export const Todo = () => {
    const todos = useSelector((store) => store.todo.todos);
    const isAuthorized = useSelector((store => store.auth.authorized));
    const dispatch = useDispatch();
    const {setValue} = useError();
    const [open, setOpen] = useState(false)

    const handleClickAdd = () => setOpen(true)

    useEffect(() => {
        if (isAuthorized) {
            const todoService = new TodoService();
            todoService.getByTodosByUserId().then((data) => {
                dispatch(setTodosAction(data))
            }).catch(e => setValue(e))
        }
    }, [isAuthorized])

    return <>
        <Box sx={{ display: "flex", flexDirection: "row-reverse", padding: "12px" }}>
            <Button onClick={handleClickAdd} sx={{ boxShadow: "1px 1px gainsboro"  , backgroundColor:"white"}}>
                <Add />
            </Button>
        </Box>
        <TodoTable />
        {todos.length == 0 &&
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="button">
                    There are no items in your todo list
                </Typography>
            </Box>
        }
        <FormDialog open={open} onClose={() => setOpen(false)} />
    </>
}