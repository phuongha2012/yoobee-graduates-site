import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProjectCard } from "./ProjectCard";

const AllProjects = () => {
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        const response = await axios.get("http://localhost:5000/projects");
        setProjects(response.data);
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
