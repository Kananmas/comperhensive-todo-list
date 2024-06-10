// components
import { Dialog, DialogContent } from "@mui/material";
import { FormGenerator } from "../../../../components/FormGenerator";

// utils
import { todoForm } from "../../../../utils/todo-form.utils";

// hooks
import { useDispatch } from "react-redux";
import { useError } from "../../../../hooks/error.hook";

// actions
import { setTodoAction } from "../../../../store/todo/todo.actions";

// services
import { TodoService } from "../../../../services/todo.service";

export function FormDialog({ open, onClose }) {
  const dispatch = useDispatch();
  const {setValue} = useError();
  async function handleSubmitForm(data) {
    try {
      const todoService = new TodoService();
      const result = await todoService.postTodoByData(data);
      dispatch(setTodoAction(result));
    } catch (error) {
      setValue(error)
    } finally {
      onClose();
    }
  }
  return <Dialog open={open} onClose={onClose}>
    <DialogContent>
      <FormGenerator fields={todoForm()} onSubmit={handleSubmitForm} />
    </DialogContent>
  </Dialog>
}