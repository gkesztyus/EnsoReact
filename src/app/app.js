/* eslint-disable */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AppBar} from 'material-ui';

import {Training} from './training/training';
import {Transactions} from './transactions/transactions';
import {People} from './people/people';
import {Main} from './main';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {NavLink, Link} from 'react-router-dom';

const styles = {
  title:{
    color:"#1f1f1f"
  },
  menuIcon: {
    width: "20px",
    marginRight: "10px"
  }
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerIsOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({sideDrawerIsOpen: !this.state.sideDrawerIsOpen});
  }

  render() {
    const title = <Link style={styles.title} to='/'>Enso Dojo</Link>;
    return (
      <Router>
        <div>
          <AppBar
            title={title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
            />
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
            <NavLink to="/trainings" activeClassName="activeMenu">
              <MenuItem onClick={this.handleToggle}>
                <img style={styles.menuIcon} src="../images/trainings.svg" />Edzések
              </MenuItem>
            </NavLink>
            <NavLink to="/people" activeClassName="activeMenu">
              <MenuItem onClick={this.handleToggle}>
                <img style={styles.menuIcon} src="../images/users.svg" />Tagok
              </MenuItem>
            </NavLink>
            <NavLink to="/transactions" activeClassName="activeMenu">
              <MenuItem onClick={this.handleToggle}>
                <img style={styles.menuIcon} src="../images/finances.svg"/>Pénzügyek
              </MenuItem>
            </NavLink>
            <NavLink to="/statistics" activeClassName="activeMenu">
              <MenuItem onClick={this.handleToggle}>
                <img style={styles.menuIcon} src="../images/statistics.svg"/>Statisztikák
              </MenuItem>
            </NavLink>
          </Drawer>
        </div>
      </Router>
    );
  }
}
