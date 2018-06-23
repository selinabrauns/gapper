import React from 'react';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import Projects from './views/Projects';
import Home from './views/Home';

import './main.scss';

const Main = ({ match }) => {
  return (
    <div className="main">
      <div className="navigation">logo test
        <Link to="/projects/project/38383">Click</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  )
};

export default withRouter(Main);