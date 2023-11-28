import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout, register } from "../services/userService";

import usePersistedState from "../hooks/usePersistantState";
import paths from "../paths";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [auth, setAuth] = usePersistedState('auth', {})

    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        try {
            const result = await login(values.email, values.password);

            setAuth(result);

            navigate(paths.home);
        } catch (err) {
            alert(err.message);
        }
    }

    const registerSubmitHandler = async (values) => {
        try {
            if (values['password'] !== values['confirm-password']) {
                throw new Error('Passwords do not match!')
            }

            register(values.email, values.password);

            navigate('/login');
        } catch (err) {
            alert(err.message);
        }
    }

    const logoutHandler = async () => {
        try {
            await logout();

            setAuth({});
            localStorage.clear('auth');

            navigate('/');
        } catch (err) {
            alert(err);
        }
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}