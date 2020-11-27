
import React from 'react';
import ReactDOM from 'react-dom';
import CustomRouter from './Router'
import './css/bootstrap.min.css'
import './css/fontawesome.min.css'
import './css/templatemo-style.css'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(<>
<Router>
  <CustomRouter>

  </CustomRouter>
</Router>
</>,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
