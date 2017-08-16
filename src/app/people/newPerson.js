/* eslint-enable */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import 'react-super-select/lib/react-super-select.css';

const styles = {
  person: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  deleteButton: {
    padding: '2px'
  },
  rankHistoryBox: {
    overflowY: 'auto',
    maxHeight: '400px',
    display: 'block'
  },
  tableBody: {
    display: 'table',
    width: '100%'
  },
  historyRows: {
    paddingTop: 0,
    paddingBottom: 0
  },
  paddedHistoryRows: {
    paddingTop: 16
  }
};

export class NewPerson extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleBirthDayChange = this.handleBirthDayChange.bind(this);
    this.handleSimpleInputChange = this.handleSimpleInputChange.bind(this);
    this.handleCurrentRankChange = this.handleCurrentRankChange.bind(this);

    this.state = {
      newPersonData: {
        name: '',
        birthDay: moment(),
        phoneNumber: '',
        email: '',
        currentRank: {},
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
  onRankHistoryDateChange(fieldName, e, date) {
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
  handleBirthDayChange(e, date) {
    const newState = this.state;
    newState.newPersonData.birthDay = date;
    this.setState(newState);
  }
  handleCurrentRankChange(event, index, value) {
    const newState = this.state;
    let id = '';
    for (const rank of this.state.data.availableRanks) {
      if (rank.value === value) {
        id = rank.id;
        break;
      }
    }
    newState.newPersonData.currentRank = {value, id};
    this.setState(newState);
  }
  handleCancel() {
    this.props.onCancel();
  }
  handleSave() {
    console.log('save!!!', this.state);
  }

  render() {
    const listOfRanks = [];
    listOfRanks.push(<MenuItem value="none" key={-1} primaryText="Nincs"/>);
    for (const rank of this.state.data.availableRanks) {
      listOfRanks.push(<MenuItem value={rank.value} key={rank.id} primaryText={rank.name}/>);
    }

    return (
      <div style={styles.person}>
        <div className="panel panel-default">
          { /* <code>{JSON.stringify(this.state, undefined, 2)}</code> */ }
          <div className="panel-heading">
              Új tanuló felvétele
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <TextField
                    floatingLabelText="Név"
                    name="name"
                    onChange={this.handleSimpleInputChange}
                    value={this.state.newPersonData.name}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <DatePicker
                    autoOk
                    floatingLabelText="Születési dátum"
                    value={this.state.newPersonData.birthDay}
                    onChange={this.handleBirthDayChange}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <TextField
                    floatingLabelText="Telefonszám"
                    name="phoneNumber"
                    onChange={this.handleSimpleInputChange}
                    value={this.state.newPersonData.phoneNumber}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <TextField
                    floatingLabelText="Email cím"
                    onChange={this.handleSimpleInputChange}
                    name="email"
                    value={this.state.newPersonData.email}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <SelectField
                    floatingLabelText="Aktuális fokozat"
                    value={this.state.newPersonData.currentRank.value}
                    onChange={this.handleCurrentRankChange}
                    floatingLabelStyle={{left: '5px'}}
                    >
                    {listOfRanks}
                  </SelectField>
                </div>
                <div className={'col-lg-3 col-sm-6 col-xs-12 ' + (this.state.newPersonData.currentRank.value ? '' : 'hidden')}>
                  <div className="form-group">
                    <label>Fokozat történet</label>
                    <div className="table-responsive">
                      <table className="table table-striped" style={styles.rankHistoryBox}>
                        <tbody style={styles.tableBody}>
                          {this.state.data.availableRanks.map((item, index) => (
                            <tr key={index} className={this.state.newPersonData.currentRank.id >= item.id ? '' : 'hidden'}>
                              <td style={styles.paddedHistoryRows}>
                                {item.name}
                              </td>
                              <td style={styles.historyRows}>
                                <div className="pull-left">
                                  <DatePicker
                                    autoOk
                                    hintText="Megszerzés dátuma"
                                    value={this.state.newPersonData.rankDates[item.value] ? this.state.newPersonData.rankDates[item.value] : null}
                                    onChange={this.handleRankHistoryDateChange[item.value]}
                                    fullWidth
                                    />
                                </div>
                              </td>
                              <td style={styles.paddedHistoryRows}>
                                <button style={styles.deleteButton} onClick={this.handleRankDelete[item.value]} className={'pull-left btn btn-link ' + (this.state.newPersonData.rankDates[item.value] ? 'show' : 'hidden')}>
                                  <i className="material-icons">close</i>
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
                  <RaisedButton label="Mentés" onClick={this.handleSave} primary/>
                  <RaisedButton label="Mégsem" onClick={this.handleCancel} default/>
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
