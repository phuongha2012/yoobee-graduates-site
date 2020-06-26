import React from 'react';
import { Link } from "react-router-dom";
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
    let content;

    if (projects) {
        content = (
            <div className="row">
            {(projects.length === 0)
                ? <div>You have not uploaded any project</div> 
                : projects.map((project, i) => <ProjectCard key="i" project={project} />)
            }
            </div>
        );
    } else {
        content = "";
    }

    return (
        <div>
            <h2>My Projects</h2>
            {content}
            <Link to="/account/projects/add">Upload a project</Link>
        </div>
    );
};


export default ProjectList;
