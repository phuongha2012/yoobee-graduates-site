import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
    return (
        <>
            <h2 className="my-3">My Projects</h2>
            {projects ? (
                projects.length === 0 ? (
                    <h4>You have not uploaded any project</h4>
                ) : (
                    <div className="card-grid">
                        {projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                )
            ) : (
                ""
            )}
            <Link className="btn btn-success mt-3" to="/account/projects/add">
                Upload a project
            </Link>
        </>
    );
};

export default ProjectList;
