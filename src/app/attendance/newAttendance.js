/* eslint-disable no-alert */
import React, {Component} from 'react';
import {TrainingDatePicker} from './trainingDatePicker';
import PropTypes from 'prop-types';

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
    this.state = {

    };
  }
  handleCancel() {
    // console.log('cancel!!!', this.props);
    this.props.onCancel();
  }
  handleSave() {
    console.log('save!!!', this);
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
                    <TrainingDatePicker/>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label>Edzésvezető</label>
                    <select multiple className="form-control">
                      <option>Kesztyűs Gábor</option>
                      <option>Kéri Dávid</option>
                      <option>Hegyes Endre</option>
                      <option>Bugris Valéria</option>
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
                    <textarea className="form-control" rows="3"/>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="btn-group" role="group">
                    <button type="submit" className="btn btn-primary" onClick={this.handleSave}>Mentés</button>
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
