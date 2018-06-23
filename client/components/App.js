import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../store/rootReducer';
import Main from './Main';


const store = createStore(rootReducer);

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
         <Route path="/" component={Main} />
        </Router>
      </Provider>
    </div>
  )
}

export default App;

