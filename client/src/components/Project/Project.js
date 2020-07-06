import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../Student/Student.scss";
import "./Project.scss";

export const Project = ({ match }) => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [authorMode, setAuthorMode] = useState(false);
    const [project, setProject] = useState([]);
    const [student, setStudent] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const { title, course, duration, category, description, image } = project;

    useEffect(() => {
        getProject();
    }, [match.params]);

    useEffect(() => {
        getStudent();
        title
            ? (document.title = `${title} - Catalyst`)
            : (document.title = `Project - Catalyst`);
        window.scroll(0, 0);
        if (
            userContext.state.user &&
            userContext.state.user._id === project.studentId
        ) {
            setAuthorMode(true);
        }
    }, [project]);

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

    return (
        <>
            <div className="heading-banner project-banner">
                <div className="container">
                    <h1 className="single-heading">{title}</h1>
                </div>
            </div>
            <div className="container">
                <div className="project-content mt-5">
                    <div className="editLink float-right">
                        {authorMode ? (
                            <Link
                                to={
                                    "/account/projects/" + project._id + "/edit"
                                }
                            >
                                Edit Project
                            </Link>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="projectPhoto">
                        <img src={image} className="mx-auto"></img>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xs-12 col-md-4 authorDetails mx-auto">
                            <Link to={"/students/" + student._id}>
                                <div
                                    className="authorPhoto"
                                    style={{
                                        backgroundImage:
                                            "url(" + student.photoUrl + ")",
                                    }}
                                ></div>
                            </Link>
                            <div className="text-uppercase mt-3">
                                {student.name}
                            </div>
                            <div className="mt-2">{student.course}</div>
                        </div>
                        <div className="col-xs-12 col-md-8 projectDetails">
                            {category ? (
                                <h5 className="projectCategory">
                                    {category} project
                                </h5>
                            ) : (
                                ""
                            )}

                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
