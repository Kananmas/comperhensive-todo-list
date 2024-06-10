// hooks
import { useNavigate } from "react-router-dom";
import { useError } from "../../hooks/error.hook";

// services
import { UserServices } from "../../services/user.service";

// components
import { FormGenerator } from "../../components/FormGenerator";

// utils
import { authForm } from "../../utils/auth-form.utils";

export function SignIn() {
    const form = authForm("signin");
    const userService = new UserServices();
    const nav = useNavigate();
    const {setValue} = useError();

    const handleSubmit = async (data) => {
        try {
            const result = await userService.signIn(data.userName,
                data.password,
                data.email);
            localStorage.setItem("access-token", result.userToken);
            nav("/")
        }
        catch (e) {
            setValue(e)
        }
    }

    return <div style={{ textAlign: "center", width: "50%", margin: "12px auto" }}>
        <FormGenerator fields={form} onSubmit={handleSubmit} />
    </div>
}