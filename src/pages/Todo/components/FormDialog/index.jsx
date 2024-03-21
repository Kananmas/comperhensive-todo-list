import { Dialog, DialogContent } from "@mui/material";
import { FormGenerator } from "../../../../components/FormGenerator";
import { todoForm } from "./utils/form.utils";
import { useDispatch } from "react-redux";
import { setTodoAction } from "../../../../store/todo/todo.actions";

export function FormDialog({open , onClose}) {
    const dispatch = useDispatch();
    function handleSubmitForm(data) {
        dispatch(setTodoAction(data));
        onClose();
    }
    return <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <FormGenerator fields={todoForm()} onSubmit={handleSubmitForm}/>
            </DialogContent>
        </Dialog>
}