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
        <div className="footer-grid">
            <div className="footer-grid-section">
                <ul>
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
                        <Link to="/">About</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-grid-section">
                {userContext.state.user ? (
                    <div className="d-flex justify-content-around">
                        <div>
                            <Link to="/account">My Account</Link>
                        </div>
                        <div onClick={logoutHandler}>Logout</div>
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
            <div className="footer-grid-section">
                &copy; Yoobee Schools 2020 | All Rights Reserved | Designed &
                Developed by Jacob Preston, Chikaylah Wellington, Sean Reilly,
                Russel Johnson & Hayley Ha
            </div>
        </div>
    );
};
