import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import { useSelector } from "react-redux"
import { Add } from "@mui/icons-material";
import { FormGenerator } from "../../components/FormGenerator";
import { useState } from "react";
import { TodoTable } from "./components/TodoTable";
import { todoForm } from "./utils/form.utils";

export const Todo = () => {
    const todos = useSelector((store) => store.todo.todos);
    const [open , setOpen] = useState(false)

    const handleClickAdd = () => setOpen(true)
    
    return <>
        <Box sx={{ display: "flex", flexDirection: "row-reverse", padding: "12px" }}>
            <Button onClick={handleClickAdd} sx={{ boxShadow: "1px 1px gainsboro" }}>
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
        <Dialog open={open}>
            <DialogContent>
                <FormGenerator fields={todoForm()}/>
            </DialogContent>
        </Dialog>
    </>
}