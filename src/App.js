import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Route exact path="/" component={ Home } />
      </Router>
    </Provider>
  );
}

export default App;
