import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoginForm() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {'email': '', 'password': ''});

    return (
        <>
            <h2>Login Form</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={values['email']}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values['password']}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    );
}