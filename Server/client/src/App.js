import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Library from "./pages/library";
import Shelf from "./pages/shelf";
import NoMatch from "./pages/noMatch";
import './App.css';

//Main app will handle switching between pages, and that's about it.

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path='/' component={Library}/>
            <Route exact path='/books' component={Shelf}/>
            <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
