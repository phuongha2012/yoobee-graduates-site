import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProjectCard } from "./ProjectCard";
import "../AllStudents/AllStudents.scss";
import { SortingNav } from "../SortingNav/SortingNav";
import { Loader } from "../Loader/Loader";

const AllProjects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [showProjects, setShowProjects] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setShowProjects(allProjects);
    }, [allProjects]);

    const getData = async () => {
        setIsLoading(true);
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                process.env.REACT_APP_BASE_URL + "/projects",
                {
                    cancelToken: source.token,
                }
            );
            if (!isUnmounted) {
                setAllProjects(response.data);
                setIsLoading(false);
            }
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

    const filterCards = (e) => {
        const target = e.target.innerText;
        const index = e.target.attributes[1].value;
        const course = e.target.attributes[2].value;
        if (target === "All") setShowProjects(allProjects);
        else {
            const projectsClicked = allProjects.filter((project) => {
                return project.course === course;
            });
            setShowProjects(projectsClicked);
        }
    };

    return (
        <>
            <div className="heading-banner projects-banner">
                <h1 className="single-heading">Projects</h1>
            </div>
            <SortingNav filter={filterCards} />
            <div className="container">
                <div className="card-grid">
                    {isLoading ? (
                        <Loader />
                    ) : showProjects ? (
                        showProjects.length === 0 ? (
                            <h3>No Projects from this course</h3>
                        ) : (
                            showProjects.map((project, i) => (
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

export default AllProjects;
