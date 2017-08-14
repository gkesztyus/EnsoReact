import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Training} from './app/training/training';
import {Transactions} from './app/transactions/transactions';
import {People} from './app/people/people';
import {Main} from './app/main';
import {Menu} from './app/menu';

import './index.scss';

ReactDOM.render(
  <Router>
    <div>
      <Menu/>
      <div className="container">
        <Route exact path="/" component={Main}/>
        <Route path="/people" component={People}/>
        <Route path="/trainings" component={Training}/>
        <Route path="/transactions" component={Transactions}/>
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
