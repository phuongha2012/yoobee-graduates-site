const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.payload
            }
        case 'UPDATE_USER_INFO': 
            return {
                ...state,
                user: {
                    ...state.user,
                    behance: action.payload.behance,
                    blurb: action.payload.blurb,
                    course: action.payload.course,
                    email: action.payload.email,
                    github: action.payload.github,
                    instagram: action.payload.instagram,
                    linkedin: action.payload.linkedin,
                    name: action.payload.name,
                    siteUrl: action.payload.siteUrl,
                    skills: action.payload.skills,
                    username: action.payload.username,
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        case 'SET_PROFILE_PHOTO':
            return {
                ...state,
                user: {
                    ...state.user,
                    photoUrl: action.payload
                }
            }
        default:
            return state;
    }
}

export default UserReducer;