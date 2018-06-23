import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Icon from '../lib/Icon';

const Project = ({ match }) => {
  return <div>
    Project
    {match.params.projectId}
  </div>
}

class Projects extends React.Component {
  render() {
    return (
      <div>
        Projects
        <Route path="/projects/project/:projectId" component={Project} />
      </div>
    )
  }
}

export default withRouter(Projects);