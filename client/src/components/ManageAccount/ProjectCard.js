import React from "react";
import { Link } from "react-router-dom";
import "./ManageAccount.scss";

const ProjectCard = ({ project }) => {
    return (
        <div className="card-grid">
            <div className="card-grid-card" key={project._id}>
                <p>{project.title}</p>
                <Link to={`/projects/${project._id}`}>
                    View project
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
