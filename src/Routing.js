import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Tasks from './components/Tasks';
import CompletedTasks from './components/CompletedTasks';

const Routing = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Tasks} />
      <Route path='/completed' component={CompletedTasks} />
    </Route>
    <Route path='*' component={() => (<div>404</div>)} />
  </Router>
)

export default Routing;