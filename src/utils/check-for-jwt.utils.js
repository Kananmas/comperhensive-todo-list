import { store } from "../store";
import { setAuthStateAction } from "../store/auth/auth.actions";
import { jwtDecode } from "jwt-decode";

const isJwtValid = (accessToken) => {
   const decoded = jwtDecode(accessToken);
   const exprDate = new Date(decoded["tokenExpirationDate"]);
   if (Date.now() >= exprDate) {
      localStorage.removeItem("access-token");
      return false;
   }
   return true;
}

export const checkForJwt = () => {
   const authState = store.getState().auth.authorized;
   if (authState) return;
   const accessToken = localStorage.getItem("access-token");
   if (accessToken == null) return
   if (accessToken != null) var decodedToken = jwtDecode(accessToken);
   if(!isJwtValid(accessToken)) return;

   store.dispatch(setAuthStateAction({
      token: accessToken,
      authorized: true,
      tokenKeys: decodedToken
   }))
}


