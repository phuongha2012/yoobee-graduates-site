const logInfo = () => {
    console.log('got to reducer')
}

const UserReducer = (state, action) => {
    logInfo();
    switch (action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export default UserReducer;