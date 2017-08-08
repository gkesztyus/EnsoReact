/* eslint-disable */
import React, {Component} from 'react';
import {IncomeForm} from './incomeForm';
import {Nav, NavItem} from 'react-bootstrap';
// import ExpenseForm from './expenseForm';

export class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewTransactionVisible: false,
      transactionType: 'income'
    };
    this.handleToggleNewTransactionVisibility = this.handleToggleNewTransactionVisibility.bind(this);
    this.handleTransactionTypeChange = this.handleTransactionTypeChange.bind(this);
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

  render() {
    return (
      <div>
        <div className={this.state.isNewTransactionVisible ? 'hidden' : 'visible'}>
          <button className="btn btn-primary" onClick={this.handleToggleNewTransactionVisibility}>Új tranzakció rögzítése</button>
        </div>
        <div className={this.state.isNewTransactionVisible ? 'visible' : 'hidden'}>
          <div className="panel panel-default">
            <div>{JSON.stringify(this.state, undefined, 2)}</div>
            <div className="panel-heading">
                Új tranzakció rögzítése
            </div>
            <div className="panel-body">
              <Nav bsStyle="tabs" activeKey="this.state.transactionType? handleTransactionTypeChange: 'income'" onSelect={this.handleTransactionTypeChange}>
                <NavItem className={this.state.transactionType==='income' ? 'active' : ''} eventKey="income" href="/home">Bevétel</NavItem>
                <NavItem className={this.state.transactionType==='expense' ? 'active' : ''} eventKey="expense">Kiadás</NavItem>
              </Nav>
              <div className={this.state.transactionType === 'expense' ? 'visible' : 'hidden'}>
                expense
              </div>
              <div className={this.state.transactionType === 'income' ? 'visible' : 'hidden'}>
                <IncomeForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
