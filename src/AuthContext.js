import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext()

const AuthProvider = props => {

    const [user, setUser] = useState({
        info: null,
        isLoading: true
    })

    const updateUser = user =>
        setUser({
            info: user,
            isLoading: false
        })

    useEffect(() => {

        let userDetails = JSON.parse(localStorage.getItem("fastClassUser"))
        if (userDetails !== user.info)
            updateUser(userDetails)
        else
            updateUser(null)
    }, [])

    const signin = (user, cb) => {

        updateUser(user)
        localStorage.setItem("fastClassUser", user)
        cb()
    };

    const signout = cb => {

        updateUser(null)
        localStorage.removeItem("fastClassUser")
        cb()
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