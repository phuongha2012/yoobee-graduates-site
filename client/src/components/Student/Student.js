import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProjectCard } from "../AllProjects/ProjectCard";

export const Student = ({ match }) => {
    const [student, setStudent] = useState([]);
    const [projects, setProjects] = useState([]);

    const getStudent = async () => {
        const response = await axios.get(
            `http://localhost:5000/students/s=${match.params.id}`
        );
        setStudent(response.data);
    };
    const getProjects = async () => {
        const response = await axios.get(
            `http://localhost:5000/projects/s=${match.params.id}`
        );
        setProjects(response.data);
    };

    useEffect(() => {
        getStudent();
        getProjects();
    }, []);

    return (
        <div>
            <Link to="/">Home</Link>
            {student ? <h3>{student.name}</h3> : ""}
            <h4>Projects</h4>
            {projects ? (
                projects.length === 0 ? (
                    <p>No projects for this student</p>
                ) : (
                    projects.map((project) => (
                        <ProjectCard key={project._id} projects={projects} />
                    ))
                )
            ) : (
                ""
            )}
        </div>
    );
};
