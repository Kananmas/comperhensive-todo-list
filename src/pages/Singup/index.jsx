import { FormGenerator } from "../../components/FormGenerator";
import { useError } from "../../hooks/error.hook";
import { UserServices } from "../../services/user.service";
import { authForm } from "../../utils/auth-form.utils";
import { checkForJwt } from "../../utils/check-for-jwt.utils";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const form = authForm("signup");
    const userService = new UserServices();
    const nav  = useNavigate();
    const {setValue} = useError();

    const handleSubmit = async (data) => {
        try {
            const result = await userService.signUp(data);
            localStorage.setItem("access-token", result.userToken);
            checkForJwt();
            nav("/")
        }
        catch (e) {
            setValue(e)
        }
    }


    return <div style={{ textAlign: "center", width: "50%", margin: "12px auto" }}>
        <FormGenerator fields={form}  onSubmit={handleSubmit} />
    </div>
}