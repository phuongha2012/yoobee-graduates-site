import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FlipMove from "react-flip-move";
import { ProjectCard } from "./ProjectCard";

const AllProjects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [showProjects, setShowProjects] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setShowProjects(allProjects);
    }, [allProjects]);

    const getData = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get("http://localhost:5000/projects", {
                cancelToken: source.token,
            });
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
        const target = e.target.innerText;
        if (target === "All") setShowProjects(allProjects);
        else {
            const projectsClicked = allProjects.filter((project) => {
                return project.course === target;
            });
            setShowProjects(projectsClicked);
        }
    };

    return (
        <>
            <Link to="/">Home</Link>
            <h2>Projects</h2>
            <button onClick={changeProjects}>All</button>
            <button onClick={changeProjects}>Web and UX</button>
            <button onClick={changeProjects}>Digital Design</button>
            <ProjectCard projects={showProjects} />
        </>
    );
};

export default AllProjects;
