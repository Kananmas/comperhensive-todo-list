import { FormGenerator } from "../../components/FormGenerator";
import { authForm } from "../../utils/auth-form.utils";

export function SignIn() {
    const form = authForm("signin");
    
    return <FormGenerator fields={form} />
}