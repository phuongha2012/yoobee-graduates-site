import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ( props ) => {
    let content;

    if (props.projects) {
        content = 
            <div className="row">
            {(props.projects.length === 0)
                ? <div>You have not uploaded any project</div> 
                : props.user.projects.map((project, i) => <ProjectCard key="i" project={project} />)
            }
            </div>
    } else {
        content = '';
    }
    
    return (
        <div>
            <h2>My Projects</h2>
            {content}
        </div> 
    )
}

export default ProjectList;
