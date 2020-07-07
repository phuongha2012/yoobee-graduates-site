import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Footer.scss";
import { UserContext } from "../../contexts/UserContext";

export const Footer = () => {
    const userContext = useContext(UserContext);
    const history = useHistory();

    const logoutHandler = () => {
        userContext.logout();
        history.push("/");
    };

    return (
        <footer className="mt-5">
            <div className="footer-grid">
                <div className="d-flex justify-content-sm-center px-5">
                    <ul className="footer-grid-section">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/students">Students</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-sm-center px-5">
                    <ul className="footer-grid-section">
                        {userContext.state.user ? (
                            <>
                                <li>
                                    <Link to="/account">My Account</Link>
                                </li>
                                <li
                                    className="btn-logout"
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <p className="footer-grid-section text-center container">
                    &copy; Yoobee Colleges 2020 | All Rights Reserved | Designed
                    & Developed by Jacob Preston, Chikaylah Wellington, Sean
                    Reilly, Russell Johnson & Hayley Ha
                </p>
            </div>
        </footer>
    );
};
