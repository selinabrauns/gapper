import React from 'react';
import Icon from '../lib/Icon';

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <Icon iconName="folder-multiple-image" />
        <Icon iconName="image-multiple" />
        <Icon iconName="image" />
      </div>
    )
  }
}

export default Home;