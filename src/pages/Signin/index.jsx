import { useDispatch } from "react-redux";
import { FormGenerator } from "../../components/FormGenerator";
import { UserServices } from "../../services/user.service";
import { authForm } from "../../utils/auth-form.utils";
import { setAuthStateAction } from "../../store/auth/auth.actions";

export function SignIn() {
    const form = authForm("signin");
    const dispatch = useDispatch();

    const handleSubmit = async (data) => {
        const userService = new UserServices();
        debugger;
        const result = await userService.signIn(data.userName,
            data.password,
            data.email);

        const payload = {
            token : btoa(JSON.stringify(result)),
            authorized:true,
            tokenKeys:{
                userId:result.Id,
                userName:result.userName,
                tokenExpiration:new Date(),
                tokenCreation:new Date(),
            }
        }

        dispatch(setAuthStateAction(payload));
    }

    return <div style={{ textAlign: "center", width: "50%", margin: "12px auto" }}>
        <FormGenerator fields={form} onSubmit={handleSubmit}/>
    </div>
}