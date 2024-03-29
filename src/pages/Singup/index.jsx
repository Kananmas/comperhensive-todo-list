import { useDispatch } from "react-redux";
import { FormGenerator } from "../../components/FormGenerator";
import { UserServices } from "../../services/user.service";
import { authForm } from "../../utils/auth-form.utils";
import { setAuthStateAction } from "../../store/auth/auth.actions";

export function SignUp() {
    const form = authForm("signup");
    const dispatch =  useDispatch();

    const handleSubmit = async (data) => {
        try { const userService = new UserServices();
          const result = await userService.signUp(data);
          localStorage.setItem("access-token" , result.userToken);
  
          const payload = {
              token : result.userToken,
              authorized:true,
              tokenKeys:{
                  userId:result.Id,
                  userName:result.userName,
                  tokenExpiration:new Date(),
                  tokenCreation:new Date(),
              }
          }
          
          dispatch(setAuthStateAction(payload));}
          catch(e) {
              console.log(e)
          }
      }
  

    return <div style={{textAlign:"center"}}>
         <FormGenerator fields={form} sx={{textAlign:"start"}} onSubmit={handleSubmit}/>
    </div>
}