import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

export const ProjectCard = forwardRef((props, ref) => {
    return (
        <div className="card-grid container" ref={ref}>
            {props.projects
                ? props.projects.map((project) => (
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
});
