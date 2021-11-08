import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext()

const AuthProvider = props => {

    const [user, setUser] = useState({
        userType: null,
        isLoading: true
    })

    const updateUser = user =>
        setUser({
            userType: user,
            isLoading: false
        })

    useEffect(() => {

        let userDetails = JSON.parse(localStorage.getItem("fastClassUser"))
        if (userDetails !== user.userType)
            updateUser(userDetails)
        else
            updateUser(null)
    }, [])

    const signin = (user, cb) => {

        updateUser(user)
        localStorage.setItem("fastClassUser", JSON.stringify(user))
        cb()
    };

    const signout = () => {

        updateUser(null)
        localStorage.removeItem("fastClassUser")
    };

    const authContextValue = {
        user,
        signin,
        signout
    };

    return <AuthContext.Provider value={authContextValue} {...props} />
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };