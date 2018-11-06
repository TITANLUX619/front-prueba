import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import './index.css';
import App from './App';
//import Show from './components/Show';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={App}/>
      </div>
  </Router>,
    document.getElementById('root')
);