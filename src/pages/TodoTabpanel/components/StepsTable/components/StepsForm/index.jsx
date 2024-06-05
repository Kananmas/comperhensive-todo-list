import { stepForm } from "./utils/step-form.utils";
import { FormGenerator } from "../../../../../../components/FormGenerator";
import { TodoStepService } from "../../../../../../services/todo-step.service";
import { useSelector } from "react-redux";

export function StepsForm ({data , handleClose}) {
    const currentTodo = useSelector((store) => store.todo.selectedTodo.todo);
    const handleSumbit = async (data) => {
        const stepsServices =  new TodoStepService();
        await stepsServices.postStepByData({...data , todoId:currentTodo.id})
        handleClose();
    }

    return <FormGenerator sx={{width:"400px" , textAlign:"center"}} 
    fields={stepForm(data)} 
    onSubmit={handleSumbit} />
}