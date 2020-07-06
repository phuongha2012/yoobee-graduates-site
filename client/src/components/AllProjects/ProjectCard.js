import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import placeholder from "../../assets/image-placeholder.png";
import "../AllStudents/AllStudents.scss";

export const ProjectCard = ({ project }) => {
    const [student, setStudent] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);

    useEffect(() => {
        getStudent();
    }, []);

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

    return (
        <div className="card">
            <Link to={`/projects/${project._id}`}>
                {project.image ? (
                    <img
                        className="card-img-top"
                        src={project.image}
                        alt={project.username}
                    />
                ) : (
                    <img
                        className="card-img-top"
                        src={placeholder}
                        alt={project.username}
                    />
                )}
            </Link>
            <div className="card-body">
                <h4 className="card-name">
                    <Link to={`/projects/${project._id}`}>{project.title}</Link>
                </h4>

                <p className="mb-1">{project.course}</p>
                <small className="d-block pb-3 font-weight-bold">
                    {student.name}
                </small>

                <Link
                    className="btn btn-outline-main"
                    to={`/projects/${project._id}`}
                >
                    View Project
                </Link>
            </div>
        </div>
    );
};
