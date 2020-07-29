import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    useEffect(() => {
        document.title = "Catalyst";
    }, []);

    return (
        <>
            <NavBar />
            <div className="home-wrapper">
                <div className="page-menu">
                    <div className="page-menu-div">
                        <Link
                            className="page-menu-div-inner single-heading"
                            to="/students"
                        >
                            Students
                        </Link>
                    </div>
                    <div className="page-menu-div">
                        <Link
                            className="page-menu-div-inner single-heading"
                            to="/projects"
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
