import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import AccountSummary from "./AccountSummary";
import ProjectList from "./ProjectList";

const AccountPage = () => {
    const userContext = useContext(UserContext);
    const [user, setUser] = useState({});
    const [projects, setProjects] = useState([]);
    const history = useHistory();

    useEffect(() => {
        onLoad(); //redirect to login page if user is not authenticated
    }, []);

    const onLoad = () => {
        if (!userContext.state.user) {
            history.push("/login");
        } else {
            axios
                .get(
                    process.env.REACT_APP_BASE_URL +
                        "/students/s=" +
                        userContext.state.user._id
                )
                .then((response) => {
                    setUser(response.data);
                    setProjects(response.data.projectsDetail);
                });
        }
    };

    return (
        <>
            <div className="position-relative bg-dark py-5 mb-3"></div>
            <div className="container">
                <h1>Manage Account</h1>
                <AccountSummary user={user} />
                <ProjectList projects={user.projectsDetail} />
            </div>
        </>
    );
};

export default AccountPage;
