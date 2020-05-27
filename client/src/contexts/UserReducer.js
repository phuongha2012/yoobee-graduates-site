const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': {
            const { user } = action.payload;
            return {
                ...state,
                hasLoginError: false,
                user: user
            }
        }
        default:
            return state;
    }
}

export default UserReducer;