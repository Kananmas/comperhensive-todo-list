import { Button, TableCell, TableRow, Typography } from "@mui/material"
import { randomString } from "../../../../../../utils/random-string.utils"
import { CheckBox } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { removeTodoAction, setSelectedTodo } from "../../../../../../store/todo/todo.actions"
import { useNavigate } from "react-router-dom"
import { TodoService } from "../../../../../../services/todo.service"
import { TodoStepService } from "../../../../../../services/todo-step.service"

export const TodoRow = ({ todo, index }) => {
    const dispatch =  useDispatch()
    const nav = useNavigate();
    const handleClickDelete = async () => {
       try {
        const todoService = new TodoService();
        await todoService.deleteById(todo.Id);
        dispatch(removeTodoAction(todo));
       } catch (error) {
        console.log(error)
       }
    }

    const handleClickDetails = async () => {
       try {
        const stepsService = new TodoStepService();
        const steps = await stepsService.getStepByTodoid(todo.Id)
        dispatch(setSelectedTodo({todo , steps}));
        nav("/todoinfo");
       } catch(e) {
        console.log(e)
       }
    }

    const cells = Object.entries(todo)
    .filter(([key, value]) => key !== "id" && key !== "userId")
    .map(([key, value]) => {
        if (value instanceof Date) {
            value = value.toDateString()
        }

        return [key, value];
    })

    const rowButtonStyles ={
        bgcolor: "red", color: "white", "&:hover": {
            color: "blue"
        },
        marginLeft:"12px"
    }
    return <TableRow>
        <TableCell>
            {index + 1}
        </TableCell>
        {
            cells.map(([key, value]) => {
                return <TableCell key={randomString()}>
                    {value}
                </TableCell>
            })
        }
        <TableCell>
            <CheckBox onChange={() => todo.isDone = !todo.isDone} />
        </TableCell>
        <TableCell>
            <Button onClick={handleClickDelete} sx={rowButtonStyles}>
                <Typography variant="button">DELETE</Typography>
            </Button>
            <Button onClick={handleClickDetails} sx={{...rowButtonStyles , bgcolor:"orange"}}>
                <Typography variant="button">SHOW DETAILS</Typography>
            </Button>
        </TableCell>
    </TableRow>
}