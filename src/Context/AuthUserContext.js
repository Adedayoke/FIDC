import React, { createContext, useState } from "react";

export const AuthUserContext = createContext();

export const AuthUserContextProvider = ({children})=>{

    const [userLoggedIn, setuserLoggedIn] = useState(false);

    console.log(userLoggedIn)

    return(
        <AuthUserContext.Provider value={{userLoggedIn, setuserLoggedIn}}>
            {children}
        </AuthUserContext.Provider>
    )
}