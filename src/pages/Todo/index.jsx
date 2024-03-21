import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useSelector } from "react-redux"
import { TodoItem } from "../../classes/todo-item.class";
import { randomString } from "../../utils/random-string.utils";

export const Todo = () => {
    const todos = useSelector((store) => store.todo.todos);
    const tableColumns = Object.keys(new TodoItem()).filter(item => item !== "id");

    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    {tableColumns.map(col => <TableCell>{col}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {todos.map(((todo, index) => {
                    const {text, done } = todo;

                    return <TableRow key={randomString()}>
                        <TableCell>{index}</TableCell>
                        <TableCell>{text}</TableCell>
                        <TableCell>
                            <Checkbox onChange={() => {
                                todo.done = !done
                            }}/>
                        </TableCell>
                    </TableRow>
                }))}
            </TableBody>
        </Table>
    </TableContainer>
}