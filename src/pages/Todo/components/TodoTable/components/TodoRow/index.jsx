// components
import { Button, Input, TableCell, TableRow, Typography } from "@mui/material"

// utils
import { randomString } from "../../../../../../utils/random-string.utils"

// hooks
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useDictionary } from "../../../../../../hooks/dictionary.hook"


// actions
import { removeTodoAction, setSelectedTodo } from "../../../../../../store/todo/todo.actions"

// services
import { TodoService } from "../../../../../../services/todo.service"
import { TodoStepService } from "../../../../../../services/todo-step.service"
import { removeKeysFromEntires } from "../../../../../../utils/remove-keys-from-entry.utils"

export const TodoRow = ({ todo, index }) => {
    const dispatch =  useDispatch()
    const nav = useNavigate();
    const {getWord , translateDate} = useDictionary();

    const handleClickDelete = async () => {
       try {
        const todoService = new TodoService();
        await todoService.deleteById(todo.id);
        dispatch(removeTodoAction(todo));
       } catch (error) {
        console.log(error)
       }
    }

    const handleClickDetails = async () => {
       try {
        const stepsService = new TodoStepService();
        const steps = await stepsService.getStepByTodoid(todo.id)
        dispatch(setSelectedTodo({todo , todoSteps:steps}));
        nav("/todoinfo/"+todo.id);
       } catch(e) {
        console.log(e)
       }
    }

    const cells = removeKeysFromEntires(todo , ["userId" , "steps" , "user" , "id" , "isDone"]).map(([key, value]) => {
        if (value instanceof Date) {
            value = value.toDateString()
        }
        if(key.toLowerCase().endsWith("date") 
        && typeof value === "string") value = translateDate(value)

        return value;
    });
    
    const rowButtonStyles ={
        marginLeft:"6px",
        bgcolor: "red", color: "white", "&:hover": {
            color: "blue"
        },
    }
    
    return <TableRow>
        <TableCell>
            {index + 1}
        </TableCell>
        {
            cells.map((value) => {
            
                return <TableCell key={randomString()}>
                    {value ? getWord(value)??value:value}
                </TableCell>
            })
        }
        <TableCell>
            <Input type="checkbox"  value={todo.isDone}/>
        </TableCell>
        <TableCell>
            <Button onClick={handleClickDelete} sx={rowButtonStyles}>
                <Typography variant="button">{getWord("delete")??"delete"}</Typography>
            </Button>
            <Button onClick={handleClickDetails} sx={{...rowButtonStyles , bgcolor:"orange"}}>
                <Typography variant="button">{getWord("showdetails")}</Typography>
            </Button>
        </TableCell>
    </TableRow>
}