import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(false);

const AuthProvider = (props) => {

    const [isAuthenticated, setAuthentication] = useState(false);

    /* ONLY FOR TESTING */
    const user_data = {
        email: "enarm@test.com",
        pass: "1357aceg",
        username: "EnarmUserTest",
    };
    /*================= */

    let navigate = useNavigate();

    const handleVerificationUser = (email, password) => { 
        if(email !== user_data.email) return { authPassed: false, error: "invalid-email", message: "El valor de usuario o corréo no es válido"}
        if(password !== user_data.pass) return { authPassed: false, error: "invalid-pass", message: "Introduzca contraseña correcta"}
        if (email === user_data.email && password === user_data.pass) {
            setAuthentication(true);
            navigate("/u/planes", { replace: true }) 
        } 
    }

    const logout = () => {
        setAuthentication(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, handleVerificationUser, logout, user_data, setAuthentication }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider