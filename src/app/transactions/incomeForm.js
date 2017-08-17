/* eslint-enable */
import React, {Component} from 'react';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

export class IncomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        admins: [
          {id: 1, value: 'Kesztyűs Gábor István', name: 'Kesztyűs Gábor'},
          {id: 2, value: 'Kéri Dávid', name: 'Kéri Dávid'},
          {id: 3, value: 'Hegyes Endre', name: 'Hegyes Endre'}
        ],
        incomeTypes: [
          {id: 0, name: 'Havi bérlet', value: 'membership', price: 7000},
          {id: 1, name: 'Fél havi bérlet', value: 'halfMonth', price: 4900},
          {id: 2, name: 'Alkalmi', value: 'occasionaly', price: 1500},
          {id: 3, name: 'Egyéb', value: 'other', price: ''}
        ],
        incomeStatus: [
          {id: 0, name: 'Kézben', value: 'inHand'},
          {id: 1, name: 'Kasszában', value: 'inSafe'}
        ]
      },
      uniquePriceEnterAllowed: false,
      newIncome: {
        transactionDate: moment(),
        incomeType: '',
        uniqueIncomeType: '',
        incomePrice: '',
        admin: '',
        status: ''
      }
    };
    this.handleIncomeTypeChange = this.handleIncomeTypeChange.bind(this);
    this.handleIncomeDateChange = this.handleIncomeDateChange.bind(this);
    this.handleSimpleInputChange = this.handleSimpleInputChange.bind(this);
    this.handleAdminChange = this.handleAdminChange.bind(this);
    this.handleIncomeStatusChange = this.handleIncomeStatusChange.bind(this);
  }
  handleIncomeTypeChange(e, k, payload) {
    const newState = this.state;
    newState.newIncome.incomeType = payload;
    if (payload.value === 'other') {
      newState.uniquePriceEnterAllowed = false;
    } else {
      newState.uniquePriceEnterAllowed = true;
      newState.newIncome.uniqueIncomeType = '';
      newState.newIncome.incomePrice = payload.price;
    }
    this.setState(newState);
  }
  handleAdminChange(e, k, payload) {
    console.log(payload);
    const newState = this.state;
    newState.newIncome.admin = payload;
    this.setState(newState);
  }
  handleIncomeDateChange(e) {
    const newState = this.state;
    newState.newIncome.transactionDate = e;
    this.setState(newState);
  }
  handleSimpleInputChange(e) {
    const newState = this.state;
    newState.newIncome[e.target.name] = e.target.value;
    this.setState(newState);
  }
  handleIncomeStatusChange(e, k, payload) {
    const newState = this.state;
    newState.newIncome.status = payload;
    this.setState(newState);
  }

  render() {
    const incomeTypeList = [];
    for (const incomeType of this.state.data.incomeTypes) {
      incomeTypeList.push(<MenuItem value={incomeType} key={incomeType.id} primaryText={incomeType.name}/>);
    }

    const incomeAdminList = [];
    for (const admin of this.state.data.admins) {
      incomeAdminList.push(<MenuItem value={admin.value} key={admin.id} primaryText={admin.name}/>);
    }
    const incomeStatusList = [];
    for (const status of this.state.data.incomeStatus) {
      incomeStatusList.push(<MenuItem value={status} key={status.id} primaryText={status.name}/>);
    }

    return (
      <form role="form">
        {/* <code>{JSON.stringify(this.state, undefined, 2)}</code> */}
        <div className="row">
          <div className="col-lg-3 col-xs-12">
            <div className="form-group">
              <DatePicker
                autoOk
                floatingLabelText="Befizetés dátuma"
                selected={this.state.newIncome.transactionDate}
                onChange={this.handleTransactionDateChange}
                />
            </div>
          </div>
          <div className="col-lg-3 col-xs-12">
            <SelectField
              floatingLabelText="Befizetés típusa"
              value={this.state.newIncome.incomeType}
              onChange={this.handleIncomeTypeChange}
              >
              {incomeTypeList}
            </SelectField>
          </div>
          <div className={'col-lg-3 col-xs-12 ' + (this.state.newIncome.incomeType.value === 'other' ? 'visible' : 'hidden')}>
            <TextField
              floatingLabelText="Befizetés megnevezése"
              name="uniqueIncomeType"
              onChange={this.handleSimpleInputChange}
              value={this.state.newIncome.uniqueIncomeType}
              />
          </div>
          <div className="col-lg-3 col-xs-12">
            <TextField
              floatingLabelText="Befizetés összege (Ft)"
              name="incomePrice"
              onChange={this.handleSimpleInputChange}
              value={this.state.newIncome.incomePrice}
              disabled={this.state.uniquePriceEnterAllowed}
              />
          </div>
          <div className="col-lg-3 col-xs-12">
            <SelectField
              floatingLabelText="Ügyintéző"
              value={this.state.newIncome.admin}
              onChange={this.handleAdminChange}
              >
              {incomeAdminList}
            </SelectField>
          </div>
          <div className="col-lg-3 col-xs-12">
            <SelectField
              floatingLabelText="Befizetés státusza"
              value={this.state.newIncome.status}
              onChange={this.handleIncomeStatusChange}
              >
              {incomeStatusList}
            </SelectField>
          </div>
        </div>
      </form>
    );
  }
}
