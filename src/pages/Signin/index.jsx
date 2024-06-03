import { useNavigate } from "react-router-dom";
import { FormGenerator } from "../../components/FormGenerator";
import { UserServices } from "../../services/user.service";
import { authForm } from "../../utils/auth-form.utils";
import { checkForJwt } from "../../utils/check-for-jwt.utils";

export function SignIn() {
    const form = authForm("signin");
    const userService = new UserServices();
    const nav = useNavigate();

    const handleSubmit = async (data) => {
        try {
            const result = await userService.signIn(data.userName,
                data.password,
                data.email);
            localStorage.setItem("access-token", result.userToken);
            checkForJwt();
            nav("/")
        }
        catch (e) {
            console.log(e)
        }
    }

    return <div style={{ textAlign: "center", width: "50%", margin: "12px auto" }}>
        <FormGenerator fields={form} onSubmit={handleSubmit} />
    </div>
}