import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {NavLink} from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">Enso Dojo</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/trainings">
              <NavItem eventKey={1}>Edzések</NavItem>
            </LinkContainer>
            <LinkContainer to="/people">
              <NavItem eventKey={2}>Tagok</NavItem>
            </LinkContainer>
            <LinkContainer to="/transactions">
              <NavItem eventKey={3} href="#">Pénzügyek</NavItem>
            </LinkContainer>
            <LinkContainer to="/statistics">
              <NavItem eventKey={4} href="#">Statisztikák</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
