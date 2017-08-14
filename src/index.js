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

import injectTapEventPlugin from 'react-tap-event-plugin';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// colors:
  /* const muiTheme = getMuiTheme(darkBaseTheme);
muiTheme.palette.primary1Color = 'orange500';
muiTheme.palette.accent1Color = 'deepOrange500'; */

ReactDOM.render(
  <MuiThemeProvider>
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
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
