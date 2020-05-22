import React from 'react';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/navbar';
import Upload from './components/upload';
import Footer from './components/footer'
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/upload' component={Upload}/>
          <Route exact path='/api/upload' component={Upload}/>
          <Route exact path='/api/article' component={Upload}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
