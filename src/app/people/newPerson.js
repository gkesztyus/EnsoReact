/* eslint-enable */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-super-select/lib/react-super-select.css';
/* https://github.com/Hacker0x01/react-datepicker
https://hacker0x01.github.io/react-datepicker/#example-5 */

const styles = {
  person: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  deleteButton: {
    padding: '2px 10px'
  },
  rankHistoryBox: {
    overflowY: 'scroll',
    height: '400px',
    display: 'block'
  },
  tableBody: {
    display: 'table',
    width: '100%'
  }
};

export class NewPerson extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleBirthDayChange = this.handleBirthDayChange.bind(this);
    this.handleSimpleInputChange = this.handleSimpleInputChange.bind(this);

    this.state = {
      newPersonData: {
        name: '',
        birthDay: moment(),
        phoneNumber: '',
        email: '',
        rankDates: {'10kyu': '', '9kyu': '', '8kyu': '', '7kyu': '', '6kyu': '', '5kyu': '', '4kyu': '', '3kyu': '', '2kyu': '', '1kyu': '', '1dan': '', '2dan': '', '3dan': '', '4dan': '', '5dan': '', '6dan': '', '7dan': '', '8dan': '', '9dan': '', '10dan': '', '11dan': '', '12dan': '', '13dan': '', '14dan': '', '15dan': ''}
      },
      data: {
        availableRanks:
        [
          {id: 0, value: '10kyu', name: '10 kyu'}, {id: 1, value: '9kyu', name: '9 kyu'}, {id: 2, value: '8kyu', name: '8 kyu'}, {id: 3, value: '7kyu', name: '7 kyu'}, {id: 4, value: '6kyu', name: '6 kyu'}, {id: 5, value: '5kyu', name: '5 kyu'}, {id: 6, value: '4kyu', name: '4 kyu'}, {id: 7, value: '3kyu', name: '3 kyu'}, {id: 8, value: '2kyu', name: '2 kyu'}, {id: 9, value: '1kyu', name: '1 kyu'}, {id: 10, value: '1dan', name: '1 dan'}, {id: 11, value: '2dan', name: '2 dan'}, {id: 12, value: '3dan', name: '3 dan'}, {id: 13, value: '4dan', name: '4 dan'}, {id: 14, value: '5dan', name: '5 dan'}, {id: 15, value: '6dan', name: '6 dan'}, {id: 16, value: '7dan', name: '7 dan'}, {id: 17, value: '8dan', name: '8 dan'}, {id: 18, value: '9dan', name: '9 dan'}, {id: 19, value: '10dan', name: '10 dan'}, {id: 20, value: '11dan', name: '11 dan'}, {id: 21, value: '12dan', name: '12 dan'}, {id: 22, value: '13dan', name: '13 dan'}, {id: 23, value: '14dan', name: '14 dan'}, {id: 24, value: '15dan', name: '15 dan'}
        ]
      }
    };

    this.handleRankHistoryDateChange = {};
    this.state.data.availableRanks.forEach(rank => {
      this.handleRankHistoryDateChange[rank.value] = this.onRankHistoryDateChange.bind(this, rank.value);
    });

    this.handleRankDelete = {};
    this.state.data.availableRanks.forEach(rank => {
      this.handleRankDelete[rank.value] = this.onRankDelete.bind(this, rank.value);
    });
  }
  onRankHistoryDateChange(fieldName, date) {
    const newState = this.state;
    newState.newPersonData.rankDates[fieldName] = date;
    this.setState(newState);
  }
  onRankDelete(fieldName, e) {
    const newState = this.state;
    newState.newPersonData.rankDates[fieldName] = '';
    this.setState(newState);
    e.preventDefault();
  }
  handleSimpleInputChange(e) {
    const newState = this.state;
    newState.newPersonData[e.target.name] = e.target.value;
    this.setState(newState);
  }
  handleBirthDayChange(e) {
    const newState = this.state;
    newState.newPersonData.birthDay = e;
    this.setState(newState);
  }
  handleCancel() {
    this.props.onCancel();
  }
  handleSave() {
    console.log('save!!!', this.state);
  }

  render() {
    return (
      <div style={styles.person}>
        <div className="panel panel-default">
          <div>{JSON.stringify(this.state, undefined, 2)}</div>
          <div className="panel-heading">
              Új tanuló felvétele
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="row">
                <div className="col-lg-4 col-xs-12">
                  <div className="form-group">
                    <label>Név</label>
                    <input name="name" value={this.state.newPersonData.name} onChange={this.handleSimpleInputChange} className="form-control"/>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12">
                  <div className="form-group">
                    <label>Születési dátum</label>
                    <div className="hidden-xs">
                      <DatePicker
                        onChange={this.handleBirthDayChange}
                        selected={this.state.newPersonData.birthDay}
                        locale="hu-hu"
                        todayButton={'Mai napon'}
                        dateFormat="YYYY/MM/DD"
                        />
                    </div>
                    <div className="hidden-sm hidden-md hidden-lg">
                      <DatePicker
                        onChange={this.handleBirthDayChange}
                        selected={this.state.newPersonData.birthDay}
                        todayButton={'Mai napon'}
                        dateFormat="YYYY/MM/DD"
                        locale="hu-hu"
                        withPortal
                        />
                    </div>
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
NewPerson.propTypes = {
  onCancel: PropTypes.func
};
