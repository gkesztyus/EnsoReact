/* eslint-enable */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import SuperSelect from 'react-super-select';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-super-select/lib/react-super-select.css';
/* https://github.com/Hacker0x01/react-datepicker
https://hacker0x01.github.io/react-datepicker/#example-5 */

// a dátum mentését majd figyelni kell rá hogy az edzésvezetőket belemergeljuk a rásztvevőkbe is..
const styles = {
  person: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export class NewPerson extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLeadsChange = this.handleLeadsChange.bind(this);
    this.handleParticipantsChange = this.handleParticipantsChange.bind(this);
    this.state = {
      newPersonData: {
        date: moment(),
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
    newState.newPersonData.theme = e.target.value;
    this.setState(newState);
  }
  handleDateChange(e) {
    const newState = this.state;
    newState.newPersonData.date = e;
    this.setState(newState);
  }
  handleLeadsChange(e) {
    const newState = this.state;
    newState.newPersonData.leads = e;
    this.setState(newState);
  }
  handleParticipantsChange(e) {
    const newState = this.state;
    newState.newPersonData.participants = e;
    this.setState(newState);
  }
  render() {
    return (
      <div style={styles.person}>
        <div className="panel panel-default">
          <div>{JSON.stringify(this.state, undefined, 2)}</div>
          <div className="panel-heading">
              Új edzés felvétele
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="row">
                <div className="col-lg-2 col-xs-12">
                  <div className="form-group">
                    <label>Edzés időpontja</label>
                    <div className="hidden-xs">
                      <DatePicker
                        onChange={this.handleDateChange}
                        selected={this.state.newPersonData.date}
                        locale="hu-hu"
                        todayButton={'Mai napon'}
                        dateFormat="YYYY/MM/DD"
                        />
                    </div>
                    <div className="hidden-sm hidden-md hidden-lg">
                      <DatePicker
                        onChange={this.handleDateChange}
                        selected={this.state.newPersonData.date}
                        todayButton={'Mai napon'}
                        dateFormat="YYYY/MM/DD"
                        locale="hu-hu"
                        withPortal
                        />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label>Edzésvezető</label>
                    {/* https://github.com/alsoscotland/react-super-select
                        http://alsoscotland.github.io/react-super-select/react-super-select-examples.html#multiselect
                        http://alsoscotland.github.io/react-super-select/annotated-source.html */}
                    <SuperSelect
                      dataSource={this.state.data.people}
                      placeholder="Válassz edzésvezetőt!"
                      onChange={this.handleLeadsChange}
                      multiple
                      keepOpenOnSelection
                      />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label>Résztvevők</label>
                    <SuperSelect
                      dataSource={this.state.data.people}
                      placeholder="Válassz résztvevőket!"
                      onChange={this.handleParticipantsChange}
                      multiple
                      keepOpenOnSelection
                      />
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12">
                  <div className="form-group">
                    <label>Edzés témája</label>
                    <textarea name="theme" value={this.state.newPersonData.theme} onChange={this.handleThemeChange} className="form-control" rows="3"/>
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
