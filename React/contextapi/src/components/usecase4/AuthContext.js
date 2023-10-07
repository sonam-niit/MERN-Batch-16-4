const { createContext, useState, useContext } = require("react");

const AuthContext= createContext();

export const AuthProvide=({children})=>{
    const [user,setUser]=useState(null);
    const login=(userData)=>{
        console.log(userData);
        setUser(userData)
        //API call of Backend for cheking the user
        // if(userData.username=='' && userData.password=='123456'){
        //     setUser(userData);
        // }
    }
    const logout=()=>{
        //api call for logout
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext=()=>{
    return useContext(AuthContext);
}