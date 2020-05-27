import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import AccountSummary from './AccountSummary';

const AccountPage = () => {
    const userContext = useContext(UserContext);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        onLoad(); //redirect to login page if user is not authenticated
    }, []);

    const onLoad = () => {
        if (!userContext.state.user) {
            history.push('/login');
        } else {
            setUser(userContext.state.user);
        }
    }

    return (
        <div>
            <h1>Manage Account</h1>
            <AccountSummary user={user} />
        </div>
    )
}

export default AccountPage;
