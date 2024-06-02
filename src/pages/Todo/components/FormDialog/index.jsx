import { Dialog, DialogContent } from "@mui/material";
import { FormGenerator } from "../../../../components/FormGenerator";
import { todoForm } from "../../../../utils/todo-form.utils";
import { useDispatch } from "react-redux";
import { setTodoAction } from "../../../../store/todo/todo.actions";
import { TodoService } from "../../../../services/todo.service";

export function FormDialog({ open, onClose }) {
  const dispatch = useDispatch();
  async function handleSubmitForm(data) {
    try {
      const todoService = new TodoService();
      const result = await todoService.postTodoByData(data);
      dispatch(setTodoAction(result));
    } catch (error) {
      console.log(error)
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