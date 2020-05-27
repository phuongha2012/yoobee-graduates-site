import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

const LoginPage = () => {
    const [hasLoginError, setHasLoginError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthenticatedUser } = useContext(UserContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', { username, password })
            .then(response => {
                console.log(response);
                if (response.data === 'Student not found' || response.data === 'Not authorised. Incorrect password') {
                    setHasLoginError(true);
                    setErrorMessage(response.data);
                } else {
                    setAuthenticatedUser(response.data);
                }
            })
    };

    const onInputChange = setter => e => {
        setter(e.target.value);
    };

    return (

        <form className="login-form" onSubmit={onSubmitHandler}>
            <h1>Login Page</h1>
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
            {hasLoginError && (
                <div className="login-form-error text-danger">
                {errorMessage}
                </div>
            )}
        <button>Login</button>
    </form>
    );
}

export default LoginPage;