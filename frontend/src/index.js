
import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css'
import './css/fontawesome.min.css'
import './css/templatemo-style.css'

import { Provider } from 'react-redux';
import reducer from './store/reducers/auth';
import App from './App';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
