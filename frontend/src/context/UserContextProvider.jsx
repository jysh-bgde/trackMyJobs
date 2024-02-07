import React, { useState } from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {
    //change default state of user to Object
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    return (
        <UserContext.Provider value = {{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider