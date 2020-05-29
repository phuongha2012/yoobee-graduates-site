import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        axios
            .post(process.env.REACT_APP_BASE_URL + '/register',  { username, email, password })
            .then((response) => {
                if (response.data === 'Username taken. Try another one!') {
                    setHasError(true);
                    setErrorMessage(response.data);
                } else {
                    history.push('/login');
                }
            });
    }

    const onInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <form
            className="col-lg-8 col-md-10 col-sm-10 mx-auto"
            onSubmit={onSubmitHandler}>
            <h2 
                className="text-center mb-5 pt-5">
                Register
            </h2>
            <div 
                className="form-group col-sm-12 col-md-6 mx-auto">
                <label>
                    Username
                </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={username}
                    onChange={onInputChange(setUsername)}
                    required
                />
            </div>
            <div 
                className="form-group col-sm-12 col-md-6 mx-auto">
                <label>
                    Email
                </label>
                <input 
                    type="email"
                    className="form-control" 
                    value={email}
                    onChange={onInputChange(setEmail)}
                    required
                />
            </div>
            <div 
                className="form-group col-sm-12 col-md-6 mb-5 mx-auto">
                <label>
                    Password
                </label>
                <input 
                    type="password" 
                    className="form-control" 
                    autoComplete="new-password" 
                    value={password}
                    onChange={onInputChange(setPassword)}
                    required 
                />
            </div>
            {hasError
                ? <div
                    className="col-sm-12 col-md-6 mb-5 mx-auto text-danger text-center">
                    {errorMessage}
                </div>
                : ''
            }
            <div 
                className="text-center mt-3">
                <button>Sign Up</button>
            </div>
        </form>
    )
}

export default RegisterPage;
