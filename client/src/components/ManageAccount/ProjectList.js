import React from 'react';
import { Link } from "react-router-dom";
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
<<<<<<< HEAD
    return (
        <div>
            <h2>My Projects</h2>
            {projects ? (
                projects.length === 0 ? (
                    <h3>You have not uploaded any project</h3>
                ) : (
                    projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))
                )
            ) : (
                ""
            )}
=======
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
>>>>>>> 7db0116f3def17a36983849eda60a18c6e49af13
            <Link to="/account/projects/add">Upload a project</Link>
        </div>
    );
};


export default ProjectList;
