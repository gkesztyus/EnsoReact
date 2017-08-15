/* eslint-enable */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import 'react-super-select/lib/react-super-select.css';
/* https://github.com/Hacker0x01/react-datepicker
https://hacker0x01.github.io/react-datepicker/#example-5 */

// a mentésnél majd figyelni kell rá hogy az edzésvezetőket belemergeljuk a rásztvevőkbe is..
const styles = {
  training: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dropDown: {
    customWidth: {
      width: 'auto'
    }
  },
  paper: {
    padding: 20
  }
};

export class NewTraining extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLeadsChange = this.handleLeadsChange.bind(this);
    this.handleParticipantsChange = this.handleParticipantsChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      newTrainingData: {
        date: null,
        leads: [],
        participants: [],
        theme: ''
      },
      data: {
        people: [
          {id: 1, value: 'Kesztyűs Gábor István', name: 'Kesztyűs Gábor'},
          {id: 2, value: 'Kéri Dávid', name: 'Kéri Dávid'},
          {id: 3, value: 'Hegyes Endre', name: 'Hegyes Endre'},
          {id: 4, value: 'Bugris Valéria', name: 'Bugris Valéria'},
          {id: 5, value: 'Fitzgerald Kirby', name: 'Angelina Pierce'}, {id: 6, value: 'Earline Terrell', name: 'Hopkins Sosa'}, {id: 7, value: 'Miranda Strickland', name: 'Sosa Blanchard'}, {id: 8, value: 'Evangeline Cole', name: 'Morin Patterson'}, {id: 9, value: 'Lawson Guthrie', name: 'Bernadine Macdonald'}, {id: 10, value: 'Bates Flowers', name: 'Scott Morrow'}, {id: 11, value: 'Lana Wooten', name: 'Nancy Blankenship'}, {id: 12, value: 'Rowena Schneider', name: 'Griffin Michael'}, {id: 13, value: 'Tiffany Knight', name: 'Clark Russo'}, {id: 14, value: 'Gross Daugherty', name: 'Hahn Coffey'}, {id: 15, value: 'Howell Chapman', name: 'Tami Silva'}, {id: 16, value: 'Melendez Melton', name: 'Fran Ratliff'}, {id: 17, value: 'Ashley Christensen', name: 'Araceli Sullivan'}, {id: 18, value: 'Pierce Fry', name: 'Aurora Curtis'}, {id: 19, value: 'Hyde Gardner', name: 'Wilkinson Oneil'}
        ]
      }
    };
  }
  handleCancel() {
    this.props.onCancel();
  }
  handleSave() {
    console.log('save!!!', this);
  }
  handleThemeChange(e) {
    const newState = this.state;
    newState.newTrainingData.theme = e.target.value;
    this.setState(newState);
  }
  handleLeadsChange(event, index, value) {
    const newState = this.state;
    newState.newTrainingData.leads = value;
    this.setState(newState);
  }
  handleParticipantsChange(event, index, value) {
    const newState = this.state;
    newState.newTrainingData.participants = value;
    this.setState(newState);
  }
  handleDateChange(event, date) {
    const newState = this.state;
    newState.newTrainingData.date = date;
    this.setState(newState);
  }
  render() {
    const listOfPeople = [];
    for (const person of this.state.data.people) {
      listOfPeople.push(<MenuItem value={person.value} key={person.id} primaryText={person.name}/>);
    }
    /* for (let i = 0; i < 100; i++) {
      listOfPeople.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`}/>);
    } */

    return (
      <div style={styles.training}>
        <div className="panel panel-default">
          <div className="panel-heading">
              Új edzés felvétele
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <DatePicker
                    autoOk
                    floatingLabelText="Edzés időpontja"
                    value={this.state.newTrainingData.date}
                    onChange={this.handleDateChange}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <SelectField
                    multiple
                    floatingLabelText="Edzés vezető"
                    value={this.state.newTrainingData.leads}
                    onChange={this.handleLeadsChange}
                    >
                    {listOfPeople}
                  </SelectField>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <SelectField
                    multiple
                    floatingLabelText="Résztvevők"
                    value={this.state.newTrainingData.participants}
                    onChange={this.handleParticipantsChange}
                    >
                    {listOfPeople}
                  </SelectField>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <TextField
                    floatingLabelText="Edzés témája"
                    multiLine
                    rowsMax={5}
                    />
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
NewTraining.propTypes = {
  onCancel: PropTypes.func
};
