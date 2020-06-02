import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <h1 className="jumbotron text-center text-danger my-auto">
                Welcome to our graduate site!
            </h1>
            <div className="page-menu">
                <div className="page-menu-div">
                    <Link to="/students">Students</Link>
                </div>
                <div className="page-menu-div">
                    <Link to="/projects">Projects</Link>
                </div>
            </div>
        </>
    );
};

export default Home;
