import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext()

const AuthProvider = props => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        let userDetails = JSON.parse(localStorage.getItem("fastClassUser"))
        if (userDetails !== user)
            setUser(userDetails)
    }, [])

    const signin = (user, cb) => {

        setUser(user)
        localStorage.setItem("fastClassUser", user)
        cb()
    };

    const signout = cb => {

        setUser(null)
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