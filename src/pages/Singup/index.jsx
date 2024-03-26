import { FormGenerator } from "../../components/FormGenerator";
import { authForm } from "../../utils/auth-form.utils";

export function SignUp() {
    const form = authForm("signup");


    return <div style={{textAlign:"center"}}>
         <FormGenerator fields={form} sx={{textAlign:"start"}}/>
    </div>
}