import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../Home/Home";
import AllStudents from "../AllStudents/AllStudents";


function App() {
  return (
      <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/students" component={AllStudents} />
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;