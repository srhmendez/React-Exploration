import React from 'react';
import Nav from './nav';
import About from './about';
import Shop from './shop';
import ItemDetail from './itemdetail.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="app">
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/:id" component={ItemDetail}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1 className="pageTitle">Home Page</h1>
  </div>
)


export default App;
