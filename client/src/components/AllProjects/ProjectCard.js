import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ projects }) => {
    return (
        <div>
            {projects
                ? projects.map((project) => (
                      <div className="col-3" key={project._id}>
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
