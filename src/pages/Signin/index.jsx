// hooks
import { useNavigate } from "react-router-dom";
import { useError } from "../../hooks/error.hook";
import { useState } from "react";
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
    const [loading , setLoading] = useState(false);

    const handleSubmit = async (data) => {
        try {
            setLoading(true)
            const result = await userService.signIn(data.userName,
                data.password,
                data.email);
            localStorage.setItem("access-token", result.userToken);
            nav("/")
        }
        catch (e) {
            setValue(e)
        }
        finally {
            setLoading(false)
        }
    }

    return <div style={{ textAlign: "center", width: "50%", margin: "12px auto" }}>
        <FormGenerator loading={loading} fields={form} onSubmit={handleSubmit} />
    </div>
}