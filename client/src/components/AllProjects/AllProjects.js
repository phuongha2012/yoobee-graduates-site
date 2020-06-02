import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FlipMove from "react-flip-move";
import { ProjectCard } from "./ProjectCard";
import "../AllStudents/AllStudents.scss";

const AllProjects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [showProjects, setShowProjects] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const [activeItem, setActiveItem] = useState("0");

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setShowProjects(allProjects);
    }, [allProjects]);

    const getData = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                process.env.REACT_APP_BASE_URL + "/projects",
                {
                    cancelToken: source.token,
                }
            );
            if (!isUnmounted) setAllProjects(response.data);
        } catch (error) {
            if (!isUnmounted) {
                if (axios.isCancel(error)) {
                    console.log(`Request cancelled: ${error.message}`);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        }
        return () => {
            setIsUnmounted(true);
            source.cancel("Cancelling in cleanup");
        };
    };

    const changeProjects = (e) => {
        const index = e.target.attributes[1].value;
        const target = e.target.innerText;
        if (target === "All") setShowProjects(allProjects);
        else {
            const projectsClicked = allProjects.filter((project) => {
                return project.course === target;
            });
            setShowProjects(projectsClicked);
        }
        setActive(index);
    };

    const setActive = (i) => {
        setActiveItem(i);
    };

    return (
        <>
            <h2 className="jumbotron bg-transparent text-center">Projects</h2>
            <ul className="sorting-nav">
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "0" ? "sorting-nav-item--active" : "")
                    }
                    data-index="0"
                    onClick={changeProjects}
                >
                    All
                </li>
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "1" ? "sorting-nav-item--active" : "")
                    }
                    data-index="1"
                    onClick={changeProjects}
                >
                    Web and UX Design
                </li>
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "2" ? "sorting-nav-item--active" : "")
                    }
                    data-index="2"
                    onClick={changeProjects}
                >
                    Digital Design
                </li>
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "3" ? "sorting-nav-item--active" : "")
                    }
                    data-index="3"
                    onClick={changeProjects}
                >
                    3D Production
                </li>
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "4" ? "sorting-nav-item--active" : "")
                    }
                    data-index="4"
                    onClick={changeProjects}
                >
                    Screen Production
                </li>
            </ul>
            <ProjectCard projects={showProjects} />
        </>
    );
};

export default AllProjects;
