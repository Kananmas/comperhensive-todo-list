import { Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { TodoItem } from "../../../../classes/todo-item.class";
import { useSelector } from "react-redux";
import { randomString } from "../../../../utils/random-string.utils";

export function TodoTable() {
    const tableColumns = Object.keys(new TodoItem()).filter(item => item !== "userId");
    const todos = useSelector((store) => store.todo.todos);
    tableColumns.push("Actions");

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
                const { text, done , startDate , priority } = todo;
                return <TableRow key={randomString()}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{text}</TableCell>
                    <TableCell>{startDate.toDateString()}</TableCell>
                    <TableCell>{priority}</TableCell>
                    <TableCell>
                        <Checkbox value={done} onChange={() => {
                            todo.done = !done
                        }} />
                    </TableCell>
                    <TableCell>
                        <Button sx={{bgcolor:"red"}}>
                            <Typography variant="button">DELETE</Typography>
                        </Button>
                    </TableCell>
                </TableRow>
            }))}

        </TableBody>
    </Table>
</TableContainer>
}