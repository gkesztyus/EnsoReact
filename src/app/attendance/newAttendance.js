/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Multiselect from 'react-bootstrap-multiselect';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-bootstrap-multiselect/css/bootstrap-multiselect.css';
/* https://github.com/Hacker0x01/react-datepicker
https://hacker0x01.github.io/react-datepicker/#example-5 */

// a dátum mentését majd .toString-gel kellene megcsinálni és a szerkesztésnél figyelni rá hogy mifaszvan...
const styles = {
  attendance: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export class NewAttendance extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLeadChange = this.handleLeadChange.bind(this);
    this.state = {
      newTrainingData: {
        date: moment(),
        lead: [],
        attendees: [],
        theme: ''
      },
      data: {
        people: [
          {value: 'Kesztyűs Gábor István', label: 'Kesztyűs Gábor'},
          {value: 'Kéri Dávid'},
          {value: 'Hegyes Endre'},
          {value: 'Bugris Valéria'}
        ]
      }
    };
  }
  handleCancel() {
    // console.log('cancel!!!', this.props);
    this.props.onCancel();
  }
  handleSave() {
    console.log('save!!!', this);
  }
  handleInputChange(event) {
    console.log('this.state', this.state);
    console.log('event target', event.target);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(value);

    this.setState({
      newTrainingData: {
        [name]: value
      }
    });
    console.log(this.state);
  }
  handleDateChange(dateValue) {
    this.setState({
      newTrainingData: {
        date: dateValue
      }
    });
    console.log(this);
  }
  handleLeadChange(leads) {
    console.log(this, leads);
    for (const lead of leads) {
      console.log('lead changed', lead, lead.label, lead.value, this);
    }
  }
  render() {
    return (
      <div style={styles.attendance}>
        <div className="panel panel-default">
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
                        selected={this.state.newTrainingData.date}
                        locale="hu-hu"
                        todayButton={'Mai napon'}
                        dateFormat="YYYY/MM/DD"
                        />
                    </div>
                    <div className="hidden-sm hidden-md hidden-lg">
                      <DatePicker
                        onChange={this.handleDateChange}
                        selected={this.state.newTrainingData.date}
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
                    {/* http://davidstutz.github.io/bootstrap-multiselect/#configuration-options-buttonTitle */}
                    <Multiselect
                      data={this.state.data.people}
                      multiple
                      maxHeight={200}
                      nonSelectedText={function () {
                        return 'Válassz edzésvezetőt!';
                      }}
                      onChange={this.handleLeadChange}
                      />
                    <select name="lead" value={this.state.newTrainingData.lead} onChange={this.handleInputChange} multiple className="form-control">
                      <option value="Kesztyűs Gábor">Kesztyűs Gábor</option>
                      <option value="Kéri Dávid">Kéri Dávid</option>
                      <option value="Hegyes Endre">Hegyes Endre</option>
                      <option value="Bugris Valéria">Bugris Valéria</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label>Résztvevők</label>
                    <select multiple className="form-control">
                      <option>Kesztyűs Gábor</option>
                      <option>Kéri Dávid</option>
                      <option>Hegyes Endre</option>
                      <option>Bugris Valéria</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12">
                  <div className="form-group">
                    <label>Edzés témája</label>
                    <textarea name="theme" value={this.state.newTrainingData.theme} onChange={this.handleInputChange} className="form-control" rows="3"/>
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
NewAttendance.propTypes = {
  onCancel: PropTypes.func
};
