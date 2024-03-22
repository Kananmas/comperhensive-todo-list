import { Button, TableCell, TableRow, Typography } from "@mui/material"
import { randomString } from "../../../../../../utils/random-string.utils"
import { CheckBox } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { removeTodoAction, setSelectedTodo } from "../../../../../../store/todo/todo.actions"

export const TodoRow = ({ todo, index }) => {
    const dispatch =  useDispatch()
    const handleClickDelete = () => {
        dispatch(removeTodoAction(todo))
    }

    const handleClickDetails = () => {
        //**get todo steps via request */
        dispatch(setSelectedTodo({todo , steps:[]}))
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
        }
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
            <Button onClick={() => handleClickDelete(todo)} sx={{...rowButtonStyles , bgcolor:"orange"}}>
                <Typography variant="button">SHOW DETAILS</Typography>
            </Button>
        </TableCell>
    </TableRow>
}