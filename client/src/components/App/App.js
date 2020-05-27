import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import AllStudents from "../AllStudents/AllStudents";
import { Student } from "../Student/Student";
import AllProjects from "../AllProjects/AllProjects";
import { Project } from "../Project/Project";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/students" exact component={AllStudents} />
                    <Route path="/students/:id" component={Student} />
                    <Route path="/projects" exact component={AllProjects} />
                    <Route path="/projects/:id" component={Project} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
