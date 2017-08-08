import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import SuperSelect from 'react-super-select';

export class IncomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeTypes: [
          {id: 0, name: 'Havi bérlet', value: 'membership', price: 7000},
          {id: 1, name: 'Fél havi bérlet', value: 'halfMonth', price: 4900},
          {id: 2, name: 'Alkalmi', value: 'occasionaly', price: 1500},
          {id: 3, name: 'Egyéb', value: 'other', price: ''}
      ],
      uniquePriceEnterAllowed: false,
      newIncome: {
        transactionDate: moment(),
        incomeType: '',
        uniqueIncomeType: '',
        incomePrice: ''
      }
    };
    this.handleIncomeTypeChange = this.handleIncomeTypeChange.bind(this);
    this.handleIncomeDateChange = this.handleIncomeDateChange.bind(this);
    this.handleSimpleInputChange = this.handleSimpleInputChange.bind(this);
  }
  handleIncomeTypeChange(e) {
    const newState = this.state;
    newState.newIncome.incomeType = e;
    if (e.value === 'other') {
      newState.uniquePriceEnterAllowed = false;
    } else {
      newState.uniquePriceEnterAllowed = true;
      newState.newIncome.uniqueIncomeType = '';
      newState.newIncome.incomePrice = e.price;
    }
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

  render() {
    return (
      <form role="form">
        <code>{JSON.stringify(this.state, undefined, 2)}</code>
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Befizetés dátuma</label>
              <DatePicker
                onChange={this.handleTransactionDateChange}
                selected={this.state.newIncome.transactionDate}
                locale="hu-hu"
                todayButton={'Mai napon'}
                dateFormat="YYYY/MM/DD"
                withPortal
                />
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Befizetés típusa</label>
              <SuperSelect
                dataSource={this.state.incomeTypes}
                placeholder="Válassz bevétel típust!"
                onChange={this.handleIncomeTypeChange}
                clearable={false}
                />
            </div>
          </div>
          <div className={'col-lg-4 col-xs-12 ' + (this.state.newIncome.incomeType.value === 'other' ? 'visible' : 'hidden')}>
            <div className="form-group">
              <label>Befizetés megnevezése</label>
              <input name="uniqueIncomeType" value={this.state.newIncome.uniqueIncomeType} onChange={this.handleSimpleInputChange} className="form-control"/>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Befizetés összege</label>
              <div className="input-group">
                <input
                  type="number"
                  name="incomePrice"
                  value={this.state.newIncome.incomePrice}
                  onChange={this.handleSimpleInputChange}
                  disabled={this.state.uniquePriceEnterAllowed}
                  className="form-control"
                  style={{zIndex: 0}}
                  />
                <div className="input-group-addon">Ft</div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Egyéb</label>
              <input name="otherType" className="form-control"/>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Telefonszám</label>
              <input type="tel" name="phoneNumber" value={this.state.newPersonData.phoneNumber} onChange={this.handleSimpleInputChange} className="form-control"/>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={this.state.newPersonData.email} onChange={this.handleSimpleInputChange} className="form-control"/>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Fokozat történet</label>
              <div className="table-responsive">
                <table className="table table-striped" style={styles.rankHistoryBox}>
                  <tbody style={styles.tableBody}>
                    {this.state.data.availableRanks.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                          <div className="pull-left">
                            <DatePicker
                              onChange={this.handleRankHistoryDateChange[item.value]}
                              selected={this.state.newPersonData.rankDates[item.value]}
                              todayButton={'Mai napon'}
                              dateFormat="YYYY/MM/DD"
                              locale="hu-hu"
                              withPortal
                              />
                          </div>
                          <button style={styles.deleteButton} onClick={this.handleRankDelete[item.value]} className={'pull-left btn btn-link ' + (this.state.newPersonData.rankDates[item.value] ? 'show' : 'hidden')}>
                            <span className="glyphicon glyphicon-remove"/>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary" onClick={this.handleSave}>Mentés</button>
              <button type="button" className="btn btn-default" onClick={this.handleCancel}>Mégsem</button>
            </div>
          </div> */}
        </div>
      </form>
    );
  }
}
