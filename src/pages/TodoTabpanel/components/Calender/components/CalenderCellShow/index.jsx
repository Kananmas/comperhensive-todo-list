// components
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

// hooks
import { useSelector } from "react-redux";

// utils
import { findRelatedStep } from "../../utils/find-related-step.utils";
import { randomColor } from "../../utils/random-color.utils";

// styles
import styles from "./index.module.css"
import { store } from "../../../../../../store";


export function CalenderCellShow(date, selectInfo) {
    const steps = store.getState().todo.selectedTodo.todoSteps;
    const currentStep = findRelatedStep(steps, date['$d']);
    if (!currentStep) return <>No Info</>
    alert(`${currentStep.stepTitle}\n${currentStep.stepDescription}`)
}