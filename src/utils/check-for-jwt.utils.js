import { store } from "../store";
import { setAuthStateAction } from "../store/auth/auth.actions";

export const checkForJwt = () => {
   const authState = store.getState().auth.authorized;
   if(authState) return ;
   const accessToken = localStorage.getItem("access-token" );
   if(accessToken == null) return
    store.dispatch(setAuthStateAction({
    token:accessToken,
    authorized:true,
   }))
}