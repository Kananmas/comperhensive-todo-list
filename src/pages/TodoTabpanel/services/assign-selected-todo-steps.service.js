import { TodoStepService } from "../../../services/todo-step.service";
import { TodoService } from "../../../services/todo.service"

const todoServices = new TodoService();
const todoStepsService = new TodoStepService();

export const assignSelectedTodoSteps = async (id) => {
    const selectedTodo = await todoServices.getTodoById(id);
    const steps = await todoStepsService.getStepByTodoid(id);

    return {
        todo:selectedTodo,
        todoSteps:steps,
    }
}