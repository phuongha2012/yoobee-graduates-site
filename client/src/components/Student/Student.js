import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProjectCard } from "../AllProjects/ProjectCard";
import placeholder from "../../assets/avatar-placeholder.png";
import NavBarAlt from "../NavBar/NavBarAlt";

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

    useEffect(() => {
        getStudent();
        getProjects();
    }, [match.params]);

    useEffect(() => {
        name
            ? (document.title = `${name} - Catalyst`)
            : (document.title = `Student - Catalyst`);
        window.scroll(0, 0);
    }, [student]);

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

    return (
        <>
            <NavBarAlt />
            <div className="student-wrapper">
                <div className="heading-banner student-banner">
                    <h1 className="single-heading">{name ? name : username}</h1>
                    <p className="heading-course">{course}</p>
                </div>

                {/* <div className="swiper"></div> */}

                <div className="student-blurb">
                    <div className="student-container">{blurb}</div>
                </div>

                <div className="student-details">
                    <div className="student-container">
                        <div className="student-details-row">
                            <div className="skills">
                                <h5 className="student-subheading">Skills</h5>
                                <ul className="student-skills">
                                    {skills
                                        ? skills.map((skill, i) => (
                                              <li
                                                  className="student-skill"
                                                  key={i}
                                              >
                                                  {skill}
                                              </li>
                                          ))
                                        : ""}
                                </ul>
                            </div>
                            <div className="contacts">
                                <h5 className="student-subheading">Skills</h5>
                                <ul className="student-skills">
                                    {github ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={github}
                                                target="_blank"
                                                title="GitHub"
                                            >
                                                Github
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {linkedIn ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={linkedIn}
                                                target="_blank"
                                                title="LinkedIn"
                                            >
                                                LinkedIn
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {behance ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={behance}
                                                target="_blank"
                                                title="Behance"
                                            >
                                                Behance
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {instagram ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={instagram}
                                                target="_blank"
                                                title="Instagram"
                                            >
                                                Instagram
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}

                                    {siteUrl ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={siteUrl}
                                                target="_blank"
                                                title="Personal Website"
                                            >
                                                Personal Website
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {email ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={"mailto:" + email}
                                                target="_blank"
                                                title="Email"
                                            >
                                                Email
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* {projects ? (
                    projects.length === 0 ? (
                        <h5 className="mt-5 text-center">
                            No projects for this student
                        </h5>
                    ) : (
                        <div className="card-grid">
                            {projects.map((project, i) => (
                                <ProjectCard key={i} project={project} />
                            ))}
                        </div>
                    )
                ) : (
                    ""
                )} */}
            </div>
        </>
    );
};
