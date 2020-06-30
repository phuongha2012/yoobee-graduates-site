import React, { useContext, useEffect, useState } from "react";
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
            setUser(userContext.state.user);
            setProjects(userContext.state.user.projectsDetail);
        }
    };

    useEffect(() => console.log("user projects are:", projects));

    return (
        <div className="container">
            <h1>Manage Account</h1>
            <AccountSummary user={user} />
            <ProjectList projects={user.projectsDetail} />
        </div>
    );
};

export default AccountPage;
