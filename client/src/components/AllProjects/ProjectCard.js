import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

export const ProjectCard = forwardRef((props, ref) => {
    return (
        <div className="row" ref={ref}>
            {props.projects
                ? props.projects.map((project) => (
                      <div className="col-3 project-card" key={project._id}>
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
