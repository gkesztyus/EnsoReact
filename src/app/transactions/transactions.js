/* eslint-disable */
import React, {Component} from 'react';
import {IncomeForm} from './incomeForm';
import {ExpenseForm} from './expenseForm';
import RaisedButton from 'material-ui/RaisedButton';
import {Tab, Tabs} from 'material-ui/Tabs';
import Subheader from 'material-ui/Subheader';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
    backgroundColor:'white'
  }
};

export class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewTransactionVisible: false
    };
    this.handleToggleNewTransactionVisibility = this.handleToggleNewTransactionVisibility.bind(this);
    this.handleTransactionTypeChange = this.handleTransactionTypeChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleToggleNewTransactionVisibility() {
    this.setState({
      isNewTransactionVisible: true
    });
  }
  handleTransactionTypeChange(eventKey, event) {
    event.preventDefault();
    this.setState({
      transactionType: eventKey
    });
    console.log(`selected ${eventKey}`);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className={this.state.isNewTransactionVisible ? 'hidden' : 'visible'}>
          <RaisedButton label="Új tranzakció rögzítése" onClick={this.handleToggleNewTransactionVisibility} primary/>
        </div>
        <div className={this.state.isNewTransactionVisible ? 'visible' : 'hidden'}>
          <div className="panel panel-default">
            <code>{JSON.stringify(this.state, undefined, 2)}</code>
            <div className="panel-heading">
              <Subheader>
                Új tranzakció rögzítése
              </Subheader>
            </div>
            <div className="panel-body">
              <Tabs
                onChange={this.handleChange}
                value={this.state.slideIndex}
              >
                <Tab label="Befizetés">
                  <IncomeForm/>
                </Tab>
                <Tab label="Kiadás">
                  <ExpenseForm/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
