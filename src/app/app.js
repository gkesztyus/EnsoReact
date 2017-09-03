/* eslint-disable */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AppBar} from 'material-ui';

import {Training} from './training/training';
import {Transactions} from './transactions/transactions';
import {People} from './people/people';
import {Main} from './main';
import {Menu} from './menu';
import {SideDrawer} from './SideDrawer';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerIsOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    console.log(this.state);
    this.setState({sideDrawerIsOpen: !this.state.sideDrawerIsOpen});
  }
  render() {
    return (
      <Router>
        <div>
          asd:<code>{JSON.stringify(this.state, undefined, 2)}</code>
          <AppBar
            title="Enso dojo"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
            />
          <Menu/>
          <div className="container">
            <Route exact path="/" component={Main}/>
            <Route path="/people" component={People}/>
            <Route path="/trainings" component={Training}/>
            <Route path="/transactions" component={Transactions}/>
          </div>
          <Drawer
            docked={false}
            width={200}
            open={this.state.sideDrawerIsOpen}
            onRequestChange={this.handleToggle}
          >
            <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>
          <code>{JSON.stringify(this.state, undefined, 2)}</code>
        </div>
      </Router>
    );
  }
}
