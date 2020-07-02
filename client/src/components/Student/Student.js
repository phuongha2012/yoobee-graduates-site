import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProjectCard } from "../AllProjects/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope as faEmail,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithubSquare as faGithub,
    faLinkedin,
    faBehance,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import placeholder from "../../assets/avatar-placeholder.png";

export const Student = ({ match }) => {
    const [student, setStudent] = useState([]);
    const [projects, setProjects] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const {
        name,
        username,
        course,
        email,
        github,
        linkedIn,
        behance,
        instagram,
        siteUrl,
        photoUrl,
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

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <div className="heading-banner student-banner">
                <h1 className="single-heading">{name ? name : username}</h1>
                <p className="heading-course">{course}</p>
            </div>
            <div className="student-container pt-5">
                <div className="student-grid">
                    <div className="student-image-div">
                        {photoUrl ? (
                            <img
                                className="student-image"
                                src={photoUrl}
                                alt={name}
                            />
                        ) : (
                            <img
                                className="student-image"
                                src={placeholder}
                                alt={name}
                            />
                        )}
                    </div>
                    <p className="student-blurb">{blurb}</p>
                    <div className="contacts">
                        <h4 className="student-subheading">Contacts</h4>
                        <div className="contact-icons">
                            {github ? (
                                <a
                                    className="contact-anchor"
                                    href={github}
                                    target="_blank"
                                    title="GitHub"
                                >
                                    <FontAwesomeIcon
                                        className={"contact-icon github-icon"}
                                        icon={faGithub}
                                    />
                                </a>
                            ) : (
                                ""
                            )}
                            {linkedIn ? (
                                <a
                                    className="contact-anchor"
                                    href={linkedIn}
                                    target="_blank"
                                    title="LinkedIn"
                                >
                                    <FontAwesomeIcon
                                        className={"contact-icon linked-icon"}
                                        icon={faLinkedin}
                                    />
                                </a>
                            ) : (
                                ""
                            )}
                            {behance ? (
                                <a
                                    className="contact-anchor"
                                    href={behance}
                                    target="_blank"
                                    title="Behance"
                                >
                                    <FontAwesomeIcon
                                        className={"contact-icon behance-icon"}
                                        icon={faBehance}
                                    />
                                </a>
                            ) : (
                                ""
                            )}
                            {instagram ? (
                                <a
                                    className="contact-anchor"
                                    href={instagram}
                                    target="_blank"
                                    title="Instagram"
                                >
                                    <FontAwesomeIcon
                                        className={"contact-icon insta-icon"}
                                        icon={faInstagram}
                                    />
                                </a>
                            ) : (
                                ""
                            )}

                            {siteUrl ? (
                                <a
                                    className="contact-anchor"
                                    href={siteUrl}
                                    target="_blank"
                                    title="Personal Website"
                                >
                                    <FontAwesomeIcon
                                        className={"contact-icon user-icon"}
                                        icon={faUser}
                                    />
                                </a>
                            ) : (
                                ""
                            )}
                            {email ? (
                                <a
                                    className="contact-anchor"
                                    href={"mailto:" + email}
                                    target="_blank"
                                    title="Email"
                                >
                                    <FontAwesomeIcon
                                        className={"contact-icon mail-icon"}
                                        icon={faEmail}
                                    />
                                </a>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="skills">
                        <h4 className="student-subheading">Skills</h4>
                        <ul className="student-skills">
                            {skills
                                ? skills.map((skill, i) => (
                                      <li className="student-skill" key={i}>
                                          {skill}
                                      </li>
                                  ))
                                : ""}
                        </ul>
                    </div>
                </div>
                <h4 className="mt-3 p-3">Projects</h4>
                <div className="card-grid">
                    {projects ? (
                        projects.length === 0 ? (
                            <h5>No projects for this student</h5>
                        ) : (
                            projects.map((project, i) => (
                                <ProjectCard key={i} project={project} />
                            ))
                        )
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};
