// hooks
import { useSelector } from "react-redux";
import { useWindow } from "../../../../../../hooks/window.hook";

// utils
import { findRelatedStep } from "../../utils/find-related-step.utils";
import { randomColor } from "../../utils/random-color.utils";   

// styles
import styles from "./index.module.css"


export function CalenderCell(props) {
    const {width} = useWindow();
    const steps = useSelector((store) => store.todo.selectedTodo.todoSteps);
    const currentStep = findRelatedStep(steps , props['$d']);
   
    if(!currentStep) return null

    if(width < 400) return <div
     className={styles["calender-item"]} 
     style={{backgroundColor:randomColor() , minWidth:"2px" , minHeight:"4px"}}></div>

    return <div className={styles["calender-item"]} style={{backgroundColor:randomColor()}}>
        <h4>{currentStep.stepTitle}</h4>
    </div>
}