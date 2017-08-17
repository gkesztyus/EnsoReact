import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import SuperSelect from 'react-super-select';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
  handleExpenseTypeChange(e, k, payload) {
    console.log(e, k, payload);
    const newState = this.state;
    newState.newExpense.expenseType = payload;
    newState.newExpense.expensePrice = (newState.newExpense.expensePrice ? newState.newExpense.expensePrice : payload.price);
    this.setState(newState);
  }
  handleAdminChange(e, k, payload) {
    const newState = this.state;
    newState.newExpense.admin = payload;
    this.setState(newState);
  }
  handleExpenseDateChange(e, date) {
    const newState = this.state;
    newState.newExpense.transactionDate = date;
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
    const expenseTypeList = [];
    for (const expenseType of this.state.data.expenseTypes) {
      expenseTypeList.push(<MenuItem value={expenseType} key={expenseType.id} primaryText={expenseType.name}/>);
    }
    const adminList = [];
    for (const admin of this.state.data.admins) {
      adminList.push(<MenuItem value={admin} key={admin.id} primaryText={admin.name}/>);
    }
    return (
      <form role="form">
        <code>{JSON.stringify(this.state, undefined, 2)}</code>
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <DatePicker
                autoOk
                floatingLabelText="Kiadás dátuma"
                value={this.state.newExpense.transactionDate}
                onChange={this.handleExpenseDateChange}
                />
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <SelectField
              floatingLabelText="Kifizetés típusa"
              value={this.state.newExpense.expenseType}
              onChange={this.handleExpenseTypeChange}
              name="expenseType"
              >
              {expenseTypeList}
            </SelectField>
          </div>
          <div className="col-lg-4 col-xs-12">
            <TextField
              floatingLabelText="Kiadás megnevezése"
              name="expenseName"
              onChange={this.handleSimpleInputChange}
              value={this.state.newExpense.expenseName}
              />
          </div>
          <div className="col-lg-4 col-xs-12">
            <TextField
              floatingLabelText="Kiadás összege (Ft)"
              name="expensePrice"
              onChange={this.handleSimpleInputChange}
              value={this.state.newExpense.expensePrice}
              />
          </div>
          <div className="col-lg-4 col-xs-12">
            <SelectField
              floatingLabelText="Ügyintéző"
              value={this.state.newExpense.admin}
              onChange={this.handleAdminChange}
              name="admin"
              >
              {adminList}
            </SelectField>
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
