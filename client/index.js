import React from 'react';
import ReactDOM from 'react-dom';

import './test.scss';

const Index = () => {
  return <div className="test">Hello</div>
}

ReactDOM.render(<Index />, document.getElementById('root'));