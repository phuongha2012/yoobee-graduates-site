import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

const initialState = {
    user: null,
    hasLoginError: false
}

const UserContext = createContext(initialState);

const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    function setAuthenticatedUser(user) {
        dispatch({
            type: 'SET_USER',
            payload: user
        })
    }

    function updateUserInfo(user) {
        dispatch({
            type: 'UPDATE_USER_INFO',
            payload: user
        })
    }

    function logout() {
        dispatch({
            type: 'LOGOUT'
        })
    }

    function setProfilePhoto(url) {
        dispatch({
            type: 'SET_PROFILE_PHOTO',
            payload: url
        })
    }

    return (
        <UserContext.Provider value={ { state, setAuthenticatedUser, updateUserInfo, logout, setProfilePhoto } }>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };




