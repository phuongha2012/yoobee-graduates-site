import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
    return (
        
            
                      <div className="card-grid-card">
                          <p>{project.title}</p>
                          <Link to={`/projects/${project._id}`}>
                              View project
                          </Link>
                      </div>
                
    );
};
