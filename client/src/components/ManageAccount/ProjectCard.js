import React from "react";
import { Link } from "react-router-dom";
import "./ManageAccount.scss";

const ProjectCard = ({ project }) => {
    return (
            <div className="card-grid-card">
                <p>{project.title}</p>
                <div className="d-flex flex-row justify-content-between">
                    <Link to={`/projects/${project._id}`}>
                        View project
                    </Link>
                    <Link to={`/account/projects/${project._id}/edit`}>
                        Edit Project
                    </Link>
                </div>
                
            </div>
    );
};

export default ProjectCard;
