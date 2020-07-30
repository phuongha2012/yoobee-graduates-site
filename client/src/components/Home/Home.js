import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MouseTooltip from "react-sticky-mouse-tooltip";
import "./Home.scss";
import NavBar from "../NavBar/NavBar";
import graduateexhibition from "../../assets/graduateexhibition.png";
import logo from "../../assets/logo.png";
import july2020 from "../../assets/july2020.png";

const Home = () => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        document.title = "Catalyst";
    }, []);

    return (
        <>
            <NavBar />
            <div className="home-wrapper">
                <img
                    className="text-grad"
                    src={graduateexhibition}
                    alt="Graduate Exhibition"
                />
                <Link
                    className="text-logo-anchor"
                    to="/students"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <img className="text-logo" src={logo} alt="Catalyst" />
                </Link>
                <img className="text-july" src={july2020} alt="July 2020" />
            </div>
            <MouseTooltip visible={isShown} offsetX={15} offsetY={10}>
                <p className="mouse-tooltip">Enter Site</p>
            </MouseTooltip>
        </>
    );
};

export default Home;
