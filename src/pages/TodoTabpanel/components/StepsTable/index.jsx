import { Box, Button, Dialog, DialogContent, Paper, Table, TableContainer } from "@mui/material";
import { StepsTableHead } from "./components/StepsTableHead";
import { StepsTableBody } from "./components/StepsTableBody";
import { Add } from "@mui/icons-material";
import { StepsForm } from "./components/StepsForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoStepService } from "../../../../services/todo-step.service";
import { setSelectedTodo } from "../../../../store/todo/todo.actions";
import { useError } from "../../../../hooks/error.hook";

export function StepsTable() {
    const [open , setOpen] = useState(false);
    const selectedTodo = useSelector((store) => store.todo.selectedTodo.todo)
    const dispatch = useDispatch();
    const {setValue} = useError();

    const handleClickAdd = () => {
        setOpen(true);
    }
    
    const fetchLatestSteps = async () => {
       try {
        const todoStepsService = new TodoStepService();
        const steps =  await todoStepsService.getStepByTodoid(selectedTodo.id);

        dispatch(setSelectedTodo({
            todo:selectedTodo, 
            todoSteps:steps,
        }))
       } catch(e) {
         setValue(e)
       }
    }

    const handleClose = () => {
        fetchLatestSteps().then(() => setOpen(false))
        .catch((e) => {
            console.log(e)
        })
    }

    return <>
        <Box sx={{ display: "flex", flexDirection: "row-reverse", padding: "12px" }}>
            <Button onClick={handleClickAdd} 
            sx={{ boxShadow: "1px 1px gainsboro" }}>
                <Add />
            </Button>
        </Box>
        <TableContainer component={Paper}>
            <Table>
                <StepsTableHead />
                <StepsTableBody />
            </Table>
        </TableContainer>
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent>
                <StepsForm data={selectedTodo} handleClose={handleClose}/>
            </DialogContent>
        </Dialog>
    </>
}