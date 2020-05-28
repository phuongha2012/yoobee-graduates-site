import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {
    const userContext = useContext(UserContext);
    const history = useHistory();

    const logoutHandler = () => {
        userContext.logout();
        history.push('/');
    };

    return (
        <div className="d-flex justify-content-around">
            <div className="col-md-3">
                <Link to="/">Logo/Home</Link>
            </div>
            <div className="col-md-6 d-flex justify-content-around">
                <Link to='/students'>Students</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/'>About</Link>
            </div>
            <div className="col-md-3">
                { userContext.state.user ? 
                <div className="d-flex justify-content-around">
                    <div>
                        <Link to='/account'>My Account</Link>
                    </div>
                    <div onClick={logoutHandler}>
                        Logout
                    </div> 
                </div> :
                <div className="d-flex justify-content-end">
                    <div>
                        <Link to='/login'>Login</Link>
                    </div>
                    <div>
                        <Link to='/register'>Register</Link>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default NavBar;
