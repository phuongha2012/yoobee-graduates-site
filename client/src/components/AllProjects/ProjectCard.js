import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = () => {
    return (
        <div>
            I am a project <Link to={`/projects/1`}>View my page</Link>
        </div>
    );
};
