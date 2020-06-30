import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
    return (
        <div>
            <h2>My Projects</h2>
            {projects ? (
                projects.length === 0 ? (
                    <h3>You have not uploaded any project</h3>
                ) : (
                    projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))
                )
            ) : (
                ""
            )}
            <Link to="/account/projects/add">Upload a project</Link>
        </div>
    );
};

export default ProjectList;
