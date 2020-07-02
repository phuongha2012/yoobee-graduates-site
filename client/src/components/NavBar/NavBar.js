import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <nav className="d-flex align-items-center justify-content-between">
            <Link className="logo" to="/">catalyst</Link>
            <div className="col-12 col-sm-4 d-flex justify-content-between">
                <Link to="/students">Students</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default NavBar;
