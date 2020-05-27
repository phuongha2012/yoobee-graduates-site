import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <div className="testClass text-center">
                Welcome to our graduate site!
            </div>
            <div className="row">
                <div className="col-6 col-md-3 text-center">
                    <Link to="/students">Web and UX</Link>
                </div>
                <div className="col-6 col-md-3 text-center">
                    <Link to="/students">Creative Digital Design</Link>
                </div>
                <div className="col-6 col-md-3 text-center">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="col-6 col-md-3 text-center">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </>
    );
};

export default Home;
