import React, { useState } from "react";
import "./SortingNav.scss";

export const SortingNav = ({ filter }) => {
    const [activeItem, setActiveItem] = useState("0");

    const handleClick = (e) => {
        const index = e.target.attributes[1].value;
        setActive(index);
        filter(e);
    };

    const setActive = (i) => {
        setActiveItem(i);
    };

    return (
        <ul className="sorting-nav">
            <li
                className={
                    "sorting-nav-item " +
                    (activeItem === "0" ? "sorting-nav-item--active" : "")
                }
                data-index="0"
                data-course="All"
                onClick={handleClick}
            >
                All
            </li>
            <li
                className={
                    "sorting-nav-item " +
                    (activeItem === "1" ? "sorting-nav-item--active" : "")
                }
                data-index="1"
                data-course="Level 6 Web Development and UX Design"
                onClick={handleClick}
            >
                Web and UX Design
            </li>
            <li
                className={
                    "sorting-nav-item " +
                    (activeItem === "2" ? "sorting-nav-item--active" : "")
                }
                data-index="2"
                data-course="Level 6 Creative Digital Design"
                onClick={handleClick}
            >
                Digital Design
            </li>
            <li
                className={
                    "sorting-nav-item " +
                    (activeItem === "3" ? "sorting-nav-item--active" : "")
                }
                data-index="3"
                data-course="Level 6 3D Production"
                onClick={handleClick}
            >
                3D Production
            </li>
            <li
                className={
                    "sorting-nav-item " +
                    (activeItem === "4" ? "sorting-nav-item--active" : "")
                }
                data-index="4"
                data-course="Level 6 Screen Production"
                onClick={handleClick}
            >
                Screen Production
            </li>
        </ul>
    );
};
