import React from "react";
import "./ManageAccount.scss";

const ProjectCard = ({ project }) => {
    return <div className="card-grid">{project.title}</div>;
};

export default ProjectCard;
