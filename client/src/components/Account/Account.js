import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Account = () => {
    const context = useContext(UserContext);
    return (
        <div>
            <h1>Manage Account</h1>
        </div>
    )
}

export default Account;
