import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/image-placeholder.png";
import "./ManageAccount.scss";

const ProjectCard = ({ project }) => {
    return (
        <div className="card-grid-card p-3">
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
            <p className="mt-2">{project.title}</p>
            <div className="d-flex flex-row justify-content-between">
                <Link to={`/projects/${project._id}`}>View project</Link>
                <Link to={`/account/projects/${project._id}/edit`}>
                    Edit Project
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
