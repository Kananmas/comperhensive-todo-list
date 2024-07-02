import { useSelector } from "react-redux";
import styles from "./index.module.css"

const colorRangePircker = () => Math.floor(Math.random()  * 255)

export function CalenderCell(props) {
    const steps = useSelector((store) => store.todo.selectedTodo.todoSteps);
    const currentStep = steps.find((item) => {
        const itemDate = new Date(item.startDate);
        const targetDate = new Date(props['$d']);
        return itemDate.toDateString() === targetDate.toDateString();
    });
    const bgColor = `rgb(${colorRangePircker()} ,
     ${colorRangePircker()} , ${colorRangePircker()})`
    if(!currentStep) return null
    return <div className={styles["calender-item"]} style={{backgroundColor:bgColor}}>
        <h6>{currentStep.title}</h6>
        <p>{currentStep.stepDescription}</p>
    </div>
}