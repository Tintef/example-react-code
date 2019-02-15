import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from '../Dashboard';
/*
import Route from '../Route';
import RouteShow from '../RouteShow';
*/

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      {
        /*
          <Route exact path="/route" component={Route} />
          <Route exact path="/route/:id" component={RouteShow} />
        */
      }
    </Switch>
  </Router>
);

export default App;
