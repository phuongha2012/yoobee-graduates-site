import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {
    const userContext = useContext(UserContext);
    return (
        <div className="d-flex justify-content-around">
            <Link to="/">Home</Link>
            <Link to='/students'>Students</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/'>About</Link>
            <div>
                { userContext.state.user ? 
                <div>
                    <span>
                        Hello {userContext.state.user.name}
                    </span>
                    <span>
                        <Link to='/account'>Manage Account</Link>
                    </span> 
                </div> :
                <div>
                    <span>
                        Have an account?
                    </span>
                    <span>
                        <Link to='/login'>Login</Link>
                    </span>
                    <span>
                        <Link to='/register'>Register</Link>
                    </span>
                </div>
                }
            </div>
        </div>
    )
}

export default NavBar;
