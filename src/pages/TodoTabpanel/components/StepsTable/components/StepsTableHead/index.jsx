import { TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { TodoStep } from "../../../../../../classes/todo-step.class";
import { randomString } from "../../../../../../utils/random-string.utils";
import { useDictionary } from "../../../../../../hooks/dictionary.hook";

export function StepsTableHead() {
    const {getWord} = useDictionary();
    const tableColumns = Object.keys(new TodoStep())
    .filter((item) => item !== "id" && item !== "todoId" );

    return <TableHead>
        <TableRow>
            {
                tableColumns.map((column) => {
                    return <TableCell key={randomString()}>
                        <Typography variant="button">{getWord(column)}</Typography>
                    </TableCell>
                })
            }
        </TableRow>
    </TableHead>
}