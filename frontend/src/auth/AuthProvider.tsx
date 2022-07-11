import {ReactNode, useContext, useEffect, useState} from "react";
import AuthContext from "./AuthContext";
import {loginUser} from "../service/apiService";
import {useNavigate} from "react-router-dom";

export default function AuthProvider({children}:{children :ReactNode}) {

    const [token , setToken] = useState('')
    const nav = useNavigate()

    const login = (email: string, password : string) => {
        return loginUser({email:email, password:password})

            .then(data => setToken(data))
            .then(() => nav("/main"));
                            //json weg
    }

    const logout = () => {
        setToken('');
        nav("/register");
    }

    return <AuthContext.Provider value={{token, login, logout}} >{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext)