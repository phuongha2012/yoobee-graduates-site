import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import AllStudents from "../AllStudents/AllStudents";

// const INITIAL_STATE = {
//     user: null,
//     hasLoginError: false
// }


function App() {
  return (
      <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={LoginPage} />
                <Route path="/students" component={AllStudents} />
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;