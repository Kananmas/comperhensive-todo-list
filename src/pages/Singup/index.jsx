import { useDispatch } from "react-redux";
import { FormGenerator } from "../../components/FormGenerator";
import { UserServices } from "../../services/user.service";
import { authForm } from "../../utils/auth-form.utils";
import { setAuthStateAction } from "../../store/auth/auth.actions";
import { checkForJwt } from "../../utils/check-for-jwt.utils";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const form = authForm("signup");
    const userService = new UserServices();
    const nav  = useNavigate();

    const handleSubmit = async (data) => {
        try {
            const result = await userService.signUp(data);
            localStorage.setItem("access-token", result.userToken);
            checkForJwt();
            nav("/")
        }
        catch (e) {
            console.log(e)
        }
    }


    return <div style={{ textAlign: "center" }}>
        <FormGenerator fields={form} sx={{ textAlign: "start" }} onSubmit={handleSubmit} />
    </div>
}