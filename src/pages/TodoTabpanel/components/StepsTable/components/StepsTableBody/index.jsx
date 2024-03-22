import { TableBody } from "@mui/material";
import { useSelector } from "react-redux";
import { randomString } from "../../../../../../utils/random-string.utils";

export function StepsTableRow() {
    const selectedTodoSteps = useSelector((store) => store.todo.selectedTodo.steps);

    return <TableBody>
        {
            selectedTodoSteps.map((step) => <StepsTableRow key={randomString()} />)
        }
    </TableBody>
}