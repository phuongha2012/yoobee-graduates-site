import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/image-placeholder.png";
import "../AllStudents/AllStudents.scss";

export const ProjectCard = ({ project }) => {
    console.log(project);
    return (
        <div className="card-grid-card card">
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

            <div className="card-body">
                <h4 className="card-name">
                    <Link to={`/projects/${project._id}`}>{project.title}</Link>
                </h4>

                <p>{project.course}</p>

                <Link
                    className="btn btn-primary"
                    to={`/projects/${project._id}`}
                >
                    View project
                </Link>
            </div>
        </div>
    );
};
