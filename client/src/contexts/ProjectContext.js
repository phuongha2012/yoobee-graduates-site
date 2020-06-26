import React, { createContext, useReducer } from 'react';
import ProjectReducer from './ProjectReducer';

const initialState = {
    project: null
}

const ProjectContext = createContext(initialState);

const ProjectContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    function setProjectPhoto(url) {
        dispatch({
            type: 'SET_PROJECT_PHOTO',
            payload: url
        })
    }

    return (
        <ProjectContext.Provider value={ { state, setProjectPhoto } }>
            {children}
        </ProjectContext.Provider>
    )
}

export { ProjectContext, ProjectContextProvider };