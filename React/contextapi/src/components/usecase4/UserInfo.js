import { useState } from "react";
import { useAuthContext } from "./AuthContext";

function UserInfo() {

    const [username,setUsername]= useState('');
    const [password,setPassword]=useState('');
    const {user,login,logout}= useAuthContext();

    const loginUser =()=>{
        login({username,password});
        setUsername('');
        setPassword('');
    }
    return ( <div>
        {
            user?(
                <>
                    <p>Welcome, {user.username}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ):(
                <>
                    <h3>Please Login Here</h3>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}
                    placeholder="USerName" />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                    placeholder="USerName" />
                    <button onClick={loginUser}>Login</button>
                </>
            )
        }
    </div> );
}

export default UserInfo;