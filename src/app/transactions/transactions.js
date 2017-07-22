import React, {Component} from 'react';
import {IncomeForm} from './incomeForm';
// import ExpenseForm from './expenseForm';

export class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewTransactionVisible: false,
      transactionType: ''
    };
    this.handleToggleNewTransactionVisibility = this.handleToggleNewTransactionVisibility.bind(this);
    this.handleTransactionTypeChange = this.handleTransactionTypeChange.bind(this);
  }
  handleToggleNewTransactionVisibility() {
    this.setState({
      isNewTransactionVisible: true
    });
  }
  handleTransactionTypeChange(e) {
    this.setState({
      transactionType: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className={this.state.isNewTransactionVisible ? 'hidden' : 'visible'}>
          <button className="btn btn-primary" onClick={this.handleToggleNewTransactionVisibility}>Új tranzakció rögzítése</button>
        </div>
        <div className={this.state.isNewTransactionVisible ? 'visible' : 'hidden'}>
          <form>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  onClick={this.handleTransactionTypeChange}
                  checked={this.state.transactionType === 'income'}
                  value="income"
                  />
                Bevétel
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  onClick={this.handleTransactionTypeChange}
                  checked={this.state.transactionType === 'expense'}
                  value="expense"
                  />
                Kiadás
              </label>
            </div>
          </form>
          <div className={this.state.transactionType === 'expense' ? 'visible' : 'hidden'}>
            expense
          </div>
          <div className={this.state.transactionType === 'income' ? 'visible' : 'hidden'}>
            <IncomeForm/>
          </div>
        </div>
      </div>
    );
  }
}
