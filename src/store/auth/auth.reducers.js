import { CLEAR_AUTH_STATE, SET_AUTH_STATE } from "./auth.constants";

export const initialState = {
    token:"",
    authorized:false,
    tokenKeys:{
        userName:"",
        userId:"",
        tokenExpiration:"",
        tokenCreation:""
    }
}


export const authReducer = (state=initialState , action) => {
    switch(action.type) {
        case SET_AUTH_STATE:
            return {...action.payload};
        case CLEAR_AUTH_STATE:
            return {...initialState};
        default:
            return {...initialState};
    }
}