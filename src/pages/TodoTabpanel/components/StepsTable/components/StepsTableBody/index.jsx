import { TableBody } from "@mui/material";
import { useSelector } from "react-redux";
import {StepTableRow} from "./components/StepTableRow"
import { randomString } from "../../../../../../utils/random-string.utils";

export function StepsTableBody() {
    const selectedTodoSteps = useSelector((store) => store.todo.selectedTodo.todoSteps) ?? [];

    return <TableBody>
        {
            selectedTodoSteps.map((step) => <StepTableRow todoStep={step}  key={randomString()} />)
        }
    </TableBody>
}