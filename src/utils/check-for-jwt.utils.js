import { store } from "../store";
import { setAuthStateAction } from "../store/auth/auth.actions";

export const checkForJwt = () => {
   const accessToken = localStorage.getItem("access-token" );
   if(accessToken == null) return
   store.dispatch(setAuthStateAction({
    token:accessToken,
    authorized:true,
   }))
}