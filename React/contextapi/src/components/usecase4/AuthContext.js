const { createContext, useState, useContext } = require("react");

const AuthContext= createContext();

export const AuthProvide=({children})=>{
    const [user,setUser]=useState(null);
    const login=async (userData)=>{
        console.log(userData);

        setUser(userData)
        
        //API call of Backend for cheking the user (API is available in Session 38 Login API)
        // resp=await axios.post("http://localhost:5000/api/auth/login",userData)
        // if(resp.status===200){
        //     setUser(resp.data.userDetails);
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