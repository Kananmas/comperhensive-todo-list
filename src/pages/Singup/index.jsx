import { FormGenerator } from "../../components/FormGenerator";
import { authForm } from "../../utils/auth-form.utils";

export function SignUp() {
    const form = authForm("signup");


    return <FormGenerator fields={form} />
}