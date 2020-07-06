import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const LoginPage = () => {
    const [hasLoginError, setHasLoginError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthenticatedUser } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        document.title = "Login - Catalyst";
        window.scroll(0, 0);
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post(process.env.REACT_APP_BASE_URL + "/login", {
                username,
                password,
            })
            .then((response) => {
                if (
                    response.data === "Student not found" ||
                    response.data === "Not authorised. Incorrect password"
                ) {
                    setHasLoginError(true);
                    setErrorMessage(response.data);
                } else {
                    setAuthenticatedUser(response.data);
                    history.push("/account");
                }
            });
    };

    const onInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <>
            <div className="position-relative bg-dark py-5 mb-3"></div>
            <form
                className="col-lg-8 col-md-10 col-sm-10 mx-auto"
                onSubmit={onSubmitHandler}
            >
                <h2 className="text-center mb-5 pt-5">Login</h2>
                <div className="form-group col-sm-12 col-md-6 mx-auto">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={onInputChange(setUsername)}
                        required
                    />
                </div>
                <div className="form-group col-sm-12 col-md-6 mb-5 mx-auto">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        autoComplete="new-password"
                        value={password}
                        onChange={onInputChange(setPassword)}
                        required
                    />
                </div>
                {hasLoginError ? (
                    <div className="col-sm-12 col-md-6 mb-5 mx-auto text-danger text-center">
                        {errorMessage}
                    </div>
                ) : (
                    ""
                )}
                <div className="text-center mt-3">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </>
    );
};

export default LoginPage;
