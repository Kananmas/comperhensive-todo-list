import { useState } from "react";
import { stepForm } from "./utils/step-form.utils";
import { FormGenerator } from "../../../../../../components/FormGenerator";

export function StepsForm ({data}) {
    const handleSumbit = () => {

    }

    return <FormGenerator fields={stepForm(data)} onSubmit={handleSumbit} />
}