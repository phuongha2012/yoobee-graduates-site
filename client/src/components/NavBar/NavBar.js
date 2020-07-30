import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <nav className="d-flex align-items-center justify-content-between">
            <Link className="logo" to="/">
                catalyst
            </Link>
            <Link to="/students">Portfolio</Link>
        </nav>
    );
};

export default NavBar;
