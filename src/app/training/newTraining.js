/* eslint-disable */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SuperSelect from 'react-super-select';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

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
      width: 400
    }
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
    this.handleChange = this.handleChange.bind(this);
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
  handleChange(event, date) {
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
    console.log(this.state.data.people);

    return (
      <div style={styles.training}>
        <div className="panel panel-default">
          // <code>{JSON.stringify(this.state, undefined, 2)}</code>
          <div className="panel-heading">
              Új edzés felvétele
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="row">
                <div className="col-lg-2 col-xs-12">
                  <DatePicker
                    autoOk
                    floatingLabelText="Edzés időpontja"
                    value={this.state.newTrainingData.date}
                    onChange={this.handleChange}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label>Edzés vezető</label>
                    <DropDownMenu
                      multiple
                      maxHeight={300}
                      value={this.state.newTrainingData.leads}
                      onChange={this.handleLeadsChange}
                      autoWidth={false}
                      style={styles.dropDown.customWidth}
                      >
                      {listOfPeople}
                    </DropDownMenu>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label>Résztvevők</label>
                    <DropDownMenu
                      multiple
                      maxHeight={300}
                      value={this.state.newTrainingData.participants}
                      onChange={this.handleParticipantsChange}
                      autoWidth={false}
                      style={styles.dropDown.customWidth}
                      >
                      {listOfPeople}
                    </DropDownMenu>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12">
                  <TextField
                    floatingLabelText="Edzés témája"
                    multiLine
                    rows={3}
                    rowsMax={5}
                    />
                </div>
                <div className="col-xs-12">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary" onClick={this.handleSave}>Mentés</button>
                    <button type="button" className="btn btn-default" onClick={this.handleCancel}>Mégsem</button>
                    <RaisedButton label="Primary" primary/>
                    <RaisedButton label="Secondary" secondary/>
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
NewTraining.propTypes = {
  onCancel: PropTypes.func
};
