import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="page-menu">
                <div className="page-menu-div">
                    <Link className="page-menu-div-inner" to="/students">
                        Students
                    </Link>
                </div>
                <div className="page-menu-div">
                    <Link className="page-menu-div-inner" to="/projects">
                        Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
