import { useDispatch } from "react-redux";
import { FormGenerator } from "../../components/FormGenerator";
import { UserServices } from "../../services/user.service";
import { authForm } from "../../utils/auth-form.utils";
import { setAuthStateAction } from "../../store/auth/auth.actions";

export function SignIn() {
    const form = authForm("signin");
    const dispatch = useDispatch();
    const userService = new UserServices();

    const handleSubmit = async (data) => {
        try {
            const result = await userService.signIn(data.userName,
                data.password,
                data.email);
            localStorage.setItem("access-token", result.userToken);
            const payload = {
                token: result.userToken,
                authorized: true,
                tokenKeys: {
                    userId: result.Id,
                    userName: result.userName,
                    tokenExpiration: new Date(),
                    tokenCreation: new Date(),
                }
            }

            dispatch(setAuthStateAction(payload));
        }
        catch (e) {
            console.log(e)
        }
    }

    return <div style={{ textAlign: "center", width: "50%", margin: "12px auto" }}>
        <FormGenerator fields={form} onSubmit={handleSubmit} />
    </div>
}