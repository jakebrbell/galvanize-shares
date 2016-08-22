import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from 'components/App';
import Posts from 'components/Posts';
import React from 'react';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Posts} />
        <Route component={Posts} path="/topics/:topic" />
      </Route>
    </Router>;
  }
});

export default Routes;
