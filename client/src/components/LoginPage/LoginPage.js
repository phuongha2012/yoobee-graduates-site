import React, { useReducer, useState } from 'react';
import axios from 'axios';
import UserReducer from '../../contexts/UserReducer';

const LoginPage = () => {
    const [hasLoginError, setHasLoginError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch] = useReducer(UserReducer);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', { username, password })
            .then(response => {
                console.log(response);
            })
    };

    const onInputChange = setter => e => {
        setter(e.target.value);
      };


    return (
        <form className="login-form" onSubmit={onSubmitHandler}>
            <h1>Login Page</h1>
            {hasLoginError && (
                <div className="login-form-error">
                Login Failed: Incorrect Credentials
                </div>
            )}
            <fieldset>
                <label>
                <span>Username</span>
                <input
                    type="text"
                    value={username}
                    onChange={onInputChange(setUsername)}
                    placeholder="dev"
                    required
                />
                </label>
                <label>
                <span>Password</span>
                <input
                    type="password"
                    value={password}
                    onChange={onInputChange(setPassword)}
                    placeholder="password"
                    required
                />
                </label>
            </fieldset>
        <button>Login</button>
    </form>
    );
}

export default LoginPage;