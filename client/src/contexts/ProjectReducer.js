const ProjectReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROJECT_PHOTO':
            return {
                ...state,
                project: {
                    ...state.project,
                    image: action.payload
                }
            }
    }
}

export default ProjectReducer;