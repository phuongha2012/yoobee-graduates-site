import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleChange = () => {
        setShowNav(!showNav);
    };

    return (
        <nav className="d-flex align-items-center justify-content-between">
            <Link className="logo" to="/">
                catalyst
            </Link>
            <div className="d-flex align-items-center col-sm-8 col-md-6 col-lg-5 justify-content-end pr-0">
                {!showNav ? (
                    <FontAwesomeIcon
                        className="nav-bars"
                        icon={faBars}
                        onClick={handleChange}
                    />
                ) : (
                    ""
                )}
                <div
                    className={`nav-list d-flex justify-content-center justify-content-sm-between align-items-center flex-column flex-sm-row ${
                        showNav ? "expanded" : ""
                    }`}
                >
                    {showNav ? (
                        <FontAwesomeIcon
                            className="nav-bars nav-bars-close"
                            icon={faTimes}
                            onClick={handleChange}
                        />
                    ) : (
                        ""
                    )}

                    <Link onClick={handleChange} to="/students">
                        Students
                    </Link>
                    <Link onClick={handleChange} to="/projects">
                        Projects
                    </Link>
                    <Link onClick={handleChange} to="/about">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
