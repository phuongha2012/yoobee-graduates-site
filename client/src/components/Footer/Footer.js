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
                <ul className="footer-grid-section">
                    <li>
                        <Link to="/">Logo/Home</Link>
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
                <div className="footer-grid-section">
                    {userContext.state.user ? (
                        <div className="d-flex justify-content-around">
                            <Link to="/account">My Account</Link>
                            <p onClick={logoutHandler}>Logout</p>
                        </div>
                    ) : (
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="footer-grid-section text-center">
                    &copy; Yoobee Colleges 2020 | All Rights Reserved | Designed
                    & Developed by Jacob Preston, Chikaylah Wellington, Sean
                    Reilly, Russell Johnson & Hayley Ha
                </div>
            </div>
        </footer>
    );
};
