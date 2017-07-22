import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export class IncomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeType: '',
      newTransaction: {
        transactionDate: moment()
      }
    };
    this.handleIncomeTypeChange = this.handleIncomeTypeChange.bind(this);
    this.handleTransactionDateChange = this.handleTransactionDateChange.bind(this);
  }
  handleIncomeTypeChange(e) {
    this.setState({
      incomeType: e.target.value
    });
  }
  handleTransactionDateChange(e) {
    const newState = this.state;
    newState.newTransaction.transactionDate = e;
    this.setState(newState);
  }

  render() {
    return (
      <form role="form">
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <label>Kifizetés dátuma</label>
              <DatePicker
                onChange={this.handleTransactionDateChange}
                selected={this.state.newTransaction.transactionDate}
                locale="hu-hu"
                todayButton={'Mai napon'}
                dateFormat="YYYY/MM/DD"
                withPortal
                />
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="form-group">
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    onClick={this.handleIncomeTypeChange}
                    checked={this.state.incomeType === 'membership'}
                    value="membership"
                    />
                  Edzésdíj
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    onClick={this.handleIncomeTypeChange}
                    checked={this.state.incomeType === 'other'}
                    value="other"
                    />
                  Egyéb
                </label>
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
