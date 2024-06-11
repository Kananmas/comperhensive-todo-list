// components
import { Dialog, DialogContent } from "@mui/material";
import { FormGenerator } from "../../../../components/FormGenerator";

// utils
import { todoForm } from "../../../../utils/todo-form.utils";

// hooks
import { useDispatch } from "react-redux";
import { useError } from "../../../../hooks/error.hook";
import { useState } from "react";

// actions
import { setTodoAction } from "../../../../store/todo/todo.actions";

// services
import { TodoService } from "../../../../services/todo.service";

export function FormDialog({ open, onClose }) {
  const dispatch = useDispatch();
  const { setValue } = useError();
  const [loading, setLoading] = useState(false);
  async function handleSubmitForm(data) {
    try {
      setLoading(true)
      const todoService = new TodoService();
      const result = await todoService.postTodoByData(data);
      dispatch(setTodoAction(result));
    } catch (error) {
      setValue(error)
    } finally {
      loading(false)
      onClose();
    }
  }
  return <Dialog open={open} onClose={onClose}>
    <DialogContent>
      <FormGenerator loading={loading}
        fields={todoForm()}
        onSubmit={handleSubmitForm} />
    </DialogContent>
  </Dialog>
}