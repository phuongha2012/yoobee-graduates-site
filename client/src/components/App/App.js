import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserContext, UserContextProvider } from '../../contexts/UserContext';
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import AllStudents from "../AllStudents/AllStudents";


function App() {
  return (
      <div>
          <UserContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/students" component={AllStudents} />
                </Switch>
            </BrowserRouter>
          </UserContextProvider>
      </div>
  );
}

export default App;