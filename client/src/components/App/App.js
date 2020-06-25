import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContextProvider } from "../../contexts/UserContext";
import Home from "../Home/Home";
import LoginPage from "../Authentication/LoginPage";
import RegisterPage from "../Authentication/RegisterPage";
import AccountPage from "../ManageAccount/AccountPage";
import EditProfilePage from "../ManageAccount/EditProfilePage";
import AllStudents from "../AllStudents/AllStudents";
import { Student } from "../Student/Student";
import AllProjects from "../AllProjects/AllProjects";
import { Project } from "../Project/Project";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Route path="/" component={NavBar} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/account" exact component={AccountPage} />
                    <Route path="/account/edit" component={EditProfilePage} />
                    <Route path="/students" exact component={AllStudents} />
                    <Route path="/students/:id" component={Student} />
                    <Route path="/projects" exact component={AllProjects} />
                    <Route path="/projects/:id" component={Project} />
                </Switch>
                <Route
                    path="/"
                    render={(props) =>
                        props.location.pathname !== "/" && <Footer />
                    }
                />
            </BrowserRouter>
        </UserContextProvider>
    );
}

export default App;
