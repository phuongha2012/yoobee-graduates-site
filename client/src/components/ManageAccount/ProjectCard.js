import React from "react";
import { Link } from "react-router-dom";
import "./ManageAccount.scss";

const ProjectCard = ({ projects }) => {
    return (
        <div className="card-grid">
            {projects
                ? projects.map((project) => (
                      <div className="card-grid-card" key={project._id}>
                          <p>{project.title}</p>
                          <Link to={`/projects/${project._id}`}>
                              View project
                          </Link>
                      </div>
                  ))
                : ""}
        </div>
    );
};

export default ProjectCard;
