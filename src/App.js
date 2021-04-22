import React from 'react';
import Nav from './nav';
import About from './about';
import Shop from './shop';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="app">
      <Nav/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
    </div>
    </Router>
  );
}

export default App;
