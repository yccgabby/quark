import React from 'react';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/navbar';
import Upload from './components/upload';
import {HashRouter as Router, Switch, Route }from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header> */}
      <Router>
        <MyNavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/upload' component={Upload}/>
        </Switch>
      </Router>
      <Home/>
    </div>
  );
}

export default App;
