import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import Upload from './pages/Upload'
import './css/bootstrap.min.css'
import './css/fontawesome.min.css'
import './css/templatemo-style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
  
     <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/upload">
        <Upload />
      </Route>
     
    </Router>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
