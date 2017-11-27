import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, browserHistory} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css';
import 'animate.css/animate.min.css';
import './styles/style.scss';
import metismenu from 'metismenu';

import Layout from 'pages/Layout.jsx'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout} >
    </Route>
  </Router>,
  document.getElementById('main')
);
