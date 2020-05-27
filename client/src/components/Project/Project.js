import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Project = ({ match }) => {
    const [project, setProject] = useState([]);
    const [student, setStudent] = useState([]);

    const getProject = async () => {
        const response = await axios.get(
            `http://localhost:5000/projects/p=${match.params.id}`
        );
        setProject(response.data);
    };

    const getStudent = async () => {
        const response = await axios.get(
            `http://localhost:5000/students/s=${project.studentId}`
        );
        setStudent(response.data);
    };

    useEffect(() => {
        getProject();
    }, []);

    useEffect(() => {
        getStudent();
    }, [project]);
    return (
        <div>
            <Link to="/">Home</Link>
            {project ? <h3>{project.title}</h3> : ""}
            {student ? <p>By: {student.name}</p> : ""}
        </div>
    );
};
