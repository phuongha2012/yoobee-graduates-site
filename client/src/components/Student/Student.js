import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProjectCard } from "../AllProjects/ProjectCard";

export const Student = ({ match }) => {
    const [student, setStudent] = useState([]);
    const [projects, setProjects] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const {
        name,
        course,
        email,
        github,
        linkedIn,
        siteUrl,
        blurb,
        skills,
    } = student;

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
        <div className="container">
            <h3>{name}</h3>
            <p>{course}</p>
            <p>{email}</p>
            <a href={github} target="_blank">
                GitHub
            </a>{" "}
            <a href={linkedIn} target="_blank">
                LinkedIn
            </a>{" "}
            <a href={siteUrl} target="_blank">
                Portfolio
            </a>
            <p>Blurb: {blurb}</p>
            <p>Skills:</p>
            <ul>{skills ? skills.map((skill) => <li>{skill}</li>) : ""}</ul>
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
