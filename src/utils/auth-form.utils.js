export const authForm =  (type) => {
    const isSignUp = type === "signup" ? [ {name:"email" , title:"Email" , type:"input" , placeholder:"" },
    {name:"phoneNumber" , title:"Phone Number" , type:"input" , placeholder:"" },]:[{name:"email" , title:"Email" , type:"input" , placeholder:"" }];

    return [
        {name:"userName" , title:"User Name" , type:"input" , placeholder:"" },
        ...isSignUp,
        {name:"password" , title:"Password" , type:"password" , placeholder:"" },
    ]
}