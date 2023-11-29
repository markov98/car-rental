import { useContext, useState } from "react";
import { register } from "../../services/userService";
import { AuthContext } from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";

export default function RegistrationForm() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    'username': '',
    'email': '',
    'password': '',
    'confirm-password': ''
  })

  return (
    <>
      <h2>Registration Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={values['username']}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
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
          <label htmlFor="confirm-password">Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={values['confirm-password']}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
}