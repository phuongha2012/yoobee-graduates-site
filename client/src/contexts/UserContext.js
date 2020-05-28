import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

const initialState = {
    user: null,
    hasLoginError: false,
    login: () => null,
    logout: () => null
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

    return (
        <UserContext.Provider value={ {state, setAuthenticatedUser} }>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };




