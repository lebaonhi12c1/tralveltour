import React, { createContext, useEffect, useState } from 'react';
export const userContext= createContext()
function UserContext({children}) {
    const [user,setUser] = useState(null)
    useEffect(()=>{
        localStorage.getItem('user') && setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    useEffect(()=>{
        user && localStorage.setItem('user',JSON.stringify(user))
    },[user])
    
    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    );
}

export default UserContext;