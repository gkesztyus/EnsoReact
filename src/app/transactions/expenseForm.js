import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import SuperSelect from 'react-super-select';

export class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        admins: [
          {id: 1, value: 'Kesztyűs Gábor István', name: 'Kesztyűs Gábor'},
          {id: 2, value: 'Kéri Dávid', name: 'Kéri Dávid'},
          {id: 3, value: 'Hegyes Endre', name: 'Hegyes Endre'}
        ],
        expenseTypes: [
          {id: 0, name: 'Terembérlet', value: 'rent', price: 42000},
          {id: 1, name: 'Reklám', value: 'commercial', price: ''},
          {id: 2, name: 'Egyéb', value: 'other', price: ''}
        ],
        expenseStaus: [
          {id: 0, name: 'Kézben', value: 'inHand'},
          {id: 1, name: 'Kifizetve', value: 'paid'}
        ]
      },
      newExpense: {
        transactionDate: moment(),
        expenseType: '',
        expenseName: '',
        expensePrice: '',
        admin: ''
      }
    };
    this.handleExpenseTypeChange = this.handleExpenseTypeChange.bind(this);
    this.handleExpenseDateChange = this.handleExpenseDateChange.bind(this);
    this.handleSimpleInputChange = this.handleSimpleInputChange.bind(this);
    this.handleAdminChange = this.handleAdminChange.bind(this);
    this.handleExpenseStateChange = this.handleExpenseStateChange.bind(this);
  }
  handleExpenseTypeChange(e) {
    const newState = this.state;
    newState.newExpense.expenseType = e;
    newState.newExpense.expensePrice = (newState.newExpense.expensePrice ? newState.newExpense.expensePrice : e.price);
    this.setState(newState);
  }
  handleAdminChange(e) {
    const newState = this.state;
    newState.newExpense.admin = e;
    this.setState(newState);
  }
  handleExpenseDateChange(e) {
    const newState = this.state;
    newState.newExpense.transactionDate = e;
    this.setState(newState);
  }
  handleSimpleInputChange(e) {
    const newState = this.state;
    newState.newExpense[e.target.name] = e.target.value;
    this.setState(newState);
  }
  handleExpenseStateChange(e) {
    const newState = this.state;
    newState.newExpense.admin = e;
    this.setState(newState);
  }

  render() {
    return (
      <form role="form">
        <code>{JSON.stringify(this.state, undefined, 2)}</code>
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Kiadás dátuma</label>
              <DatePicker
                onChange={this.handleTransactionDateChange}
                selected={this.state.newExpense.transactionDate}
                locale="hu-hu"
                todayButton={'Mai napon'}
                dateFormat="YYYY/MM/DD"
                withPortal
                />
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Kiadás típusa</label>
              <SuperSelect
                dataSource={this.state.data.expenseTypes}
                placeholder="Válassz kiadás típust!"
                onChange={this.handleExpenseTypeChange}
                clearable={false}
                />
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Kiadás megnevezése</label>
              <input name="expenseName" value={this.state.newExpense.expenseName} onChange={this.handleSimpleInputChange} className="form-control"/>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Kiadás összege</label>
              <div className="input-group">
                <input
                  type="number"
                  name="expensePrice"
                  value={this.state.newExpense.expensePrice}
                  onChange={this.handleSimpleInputChange}
                  className="form-control"
                  style={{zIndex: 0}}
                  />
                <div className="input-group-addon">Ft</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Ügyintéző</label>
              <SuperSelect
                dataSource={this.state.data.admins}
                placeholder="Válassz ügyintézőt!"
                onChange={this.handleAdminChange}
                clearable={false}
                />
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Státusz</label>
              <SuperSelect
                dataSource={this.state.data.expenseStaus}
                placeholder="Válassz státuszt!"
                onChange={this.handleExpenseStateChange}
                clearable={false}
                />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
