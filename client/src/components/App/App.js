import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserContext, UserContextProvider } from '../../contexts/UserContext';
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import AllStudents from "../AllStudents/AllStudents";
import { Student } from "../Student/Student";
import AllProjects from "../AllProjects/AllProjects";
import { Project } from "../Project/Project";

function App() {
  return (
      <div>
          <UserContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/students" component={AllStudents} />
                    <Route path="/students/:id" component={Student} />
                    <Route path="/projects" exact component={AllProjects} />
                    <Route path="/projects/:id" component={Project} />
                </Switch>
            </BrowserRouter>
          </UserContextProvider>
      </div>
  );
}

export default App;
