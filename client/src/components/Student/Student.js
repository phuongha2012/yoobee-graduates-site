import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProjectCard } from "../AllProjects/ProjectCard";

export const Student = ({ match }) => {
    const [student, setStudent] = useState([]);
    const [projects, setProjects] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);

    const getStudent = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/students/s=${match.params.id}`,
                {
                    cancelToken: source.token,
                }
            );
            if (!isUnmounted) setStudent(response.data);
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

    const getProjects = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/projects/s=${match.params.id}`,
                {
                    cancelToken: source.token,
                }
            );
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
        getStudent();
        getProjects();
    }, [match.params]);

    return (
        <div>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
            <p>{student.email}</p>
            <a href={student.github}>GitHub</a>{" "}
            <a href={student.linkedIn}>LinkedIn</a>{" "}
            <a href={student.siteUrl}>Portfolio</a>
            <p>Blurb: {student.blurb}</p>
            <p>Skils:</p>
            <ul>
                {student.skills
                    ? student.skills.map((skill) => <li>{skill}</li>)
                    : ""}
            </ul>
            <h4>Projects</h4>
            {projects ? (
                projects.length > 0 ? (
                    projects.map((project) => (
                        <ProjectCard key={project._id} projects={projects} />
                    ))
                ) : (
                    <p>No projects for this student</p>
                )
            ) : (
                ""
            )}
        </div>
    );
};
