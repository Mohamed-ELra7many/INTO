import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/font-awesome/css/font-awesome.min.css"    // file "font-awesome"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

