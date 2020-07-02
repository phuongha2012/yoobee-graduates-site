import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Student/Student.scss";

export const Project = ({ match }) => {
    const [project, setProject] = useState([]);
    const [student, setStudent] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const { title, course, duration, category } = project;

    const getProject = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/projects/p=${match.params.id}`,
                {
                    cancelToken: source.token,
                }
            );
            if (!isUnmounted) setProject(response.data);
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

    const getStudent = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/students/s=${project.studentId}`,
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

    useEffect(() => {
        getProject();
    }, [match.params]);

    useEffect(() => {
        getStudent();
    }, [project]);

    console.log(project);
    return (
        <>
            <div className="heading-banner project-banner">
            <div className="container">
                <h1 className="single-heading">{title}</h1>
                </div>
            </div>
            <div className="container">
            <div className="project-content"></div>
            {/* <p>
                By: <Link to={`/students/${student._id}`}>{student.name}</Link>
            </p> */}
        </div>
        </>
    );
};
