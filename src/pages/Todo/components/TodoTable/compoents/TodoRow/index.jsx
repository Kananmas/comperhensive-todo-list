import { Button, TableCell, TableRow, Typography } from "@mui/material"
import { randomString } from "../../../../../../utils/random-string.utils"
import { CheckBox } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { removeTodoAction } from "../../../../../../store/todo/todo.actions"

export const TodoRow = ({ todo, index }) => {
    const dispatch =  useDispatch()
    const handleClickDelete = (todo) => {
        dispatch(removeTodoAction(todo))
    }

    const cells = Object.entries(todo).filter(([key, value]) => key !== "id" && key !== "userId").map(([key, value]) => {
        if (value instanceof Date) {
            value = value.toDateString()
        }

        return [key, value];
    })
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
            <CheckBox onChange={() => todo.isDone = !todo.isDone} value={todo.isDone ?? false} />
        </TableCell>
        <TableCell>
            <Button onClick={() => handleClickDelete(todo)} sx={{
                bgcolor: "red", color: "white", "&:hover": {
                    color: "blue"
                }
            }}>
                <Typography variant="button">DELETE</Typography>
            </Button>
        </TableCell>
    </TableRow>
}