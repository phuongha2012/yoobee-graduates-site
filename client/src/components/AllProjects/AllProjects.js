import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProjectCard } from "./ProjectCard";

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);

    const getData = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get("http://localhost:5000/projects", {
                cancelToken: source.token,
            });
            if (!isUnmounted) setProjects(response.data);
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

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Link to="/">Home</Link>
            <h2>Projects</h2>
            <ProjectCard projects={projects} />
        </div>
    );
};

export default AllProjects;
