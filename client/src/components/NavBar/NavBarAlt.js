import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";

const NavBarAlt = () => {
    const [showNav, setShowNav] = useState(false);

    const handleChange = () => {
        setShowNav(!showNav);
    };

    return (
        <nav className="d-flex align-items-center justify-content-between navbar-alt">
            <Link className="logo" to="/">
                catalyst
            </Link>
            <Link to="/students">Portfolio</Link>
        </nav>
    );
};

export default NavBarAlt;
