// components
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { TodoRow } from "./components/TodoRow";

// classes
import { TodoItem } from "../../../../classes/todo-item.class";

// hooks
import { useSelector } from "react-redux";
import { useDictionary } from "../../../../hooks/dictionary.hook";

// utils
import { randomString } from "../../../../utils/random-string.utils";

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