import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { TodoItem } from "../../../../classes/todo-item.class";
import { useSelector } from "react-redux";
import { randomString } from "../../../../utils/random-string.utils";
import { TodoRow } from "./compoents/TodoRow";
import { useDictionary } from "../../../../hooks/dictionary.hook";

export function TodoTable() {
    const tableColumns = Object.keys(new TodoItem()).filter(item => item !== "userId");
    const todos = useSelector((store) => store.todo.todos);
    tableColumns.push("Actions");
    const {getWord} = useDictionary();


    return <TableContainer component={Paper}>
    <Table>
        <TableHead>
            <TableRow>
                {tableColumns.map(col => <TableCell key={randomString()}>
                    <Typography variant="button" >{getWord(col) ?? col}</Typography>
                </TableCell>)}
            </TableRow>
        </TableHead>
        <TableBody>
            {todos.map(((todo , index) => {
                return <TodoRow key={randomString()} todo={todo} index={index} />
            }))}
        </TableBody>
    </Table>
</TableContainer>
}