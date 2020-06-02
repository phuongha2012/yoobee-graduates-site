const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.payload
            };
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