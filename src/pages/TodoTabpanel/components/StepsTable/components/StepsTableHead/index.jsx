import { TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { TodoStep } from "../../../../../../classes/todo-step.class";
import { randomString } from "../../../../../../utils/random-string.utils";

export function StepsTableHead() {
    const tableColumns = Object.keys(new TodoStep())
    .filter((item) => item !== "id" && item !== "todoId" );

    return <TableHead>
        <TableRow>
            {
                tableColumns.map((column) => {
                    return <TableCell key={randomString()}>
                        <Typography variant="button">{column}</Typography>
                    </TableCell>
                })
            }
        </TableRow>
    </TableHead>
}