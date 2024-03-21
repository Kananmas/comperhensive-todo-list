import { Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { TodoItem } from "../../../../classes/todo-item.class";
import { useDispatch, useSelector } from "react-redux";
import { randomString } from "../../../../utils/random-string.utils";
import { removeTodoAction } from "../../../../store/todo/todo.actions";

export function TodoTable() {
    const dispatch = useDispatch();
    const tableColumns = Object.keys(new TodoItem()).filter(item => item !== "userId");
    const todos = useSelector((store) => store.todo.todos);
    tableColumns.push("Actions");

    const handleClickDelete = (todo) => {
        dispatch(removeTodoAction(todo))
    }

    return <TableContainer component={Paper}>
    <Table>
        <TableHead>
            <TableRow>
                {tableColumns.map(col => <TableCell key={randomString()}>
                    <Typography variant="button" >{col}</Typography>
                </TableCell>)}
            </TableRow>
        </TableHead>
        <TableBody>
            {todos.map(((todo, index) => {
                let { text, done , startDate , priority } = todo;
                
                if(startDate instanceof Date) {
                    startDate = startDate.toDateString();
                }

                return <TableRow key={randomString()}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{text}</TableCell>
                    <TableCell>{priority}</TableCell>
                    <TableCell>{startDate}</TableCell>
                    <TableCell>
                        <Checkbox value={done} onChange={() => {
                            todo.done = !done
                        }} />
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleClickDelete(todo)} sx={{bgcolor:"red" , color:"white" , "&:hover":{
                            color:"blue"
                        }}}>
                            <Typography variant="button">DELETE</Typography>
                        </Button>
                    </TableCell>
                </TableRow>
            }))}

        </TableBody>
    </Table>
</TableContainer>
}