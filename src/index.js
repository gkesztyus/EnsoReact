import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './app/app.js';

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
    <App/>
  </MuiThemeProvider>,
  document.getElementById('root')
);
