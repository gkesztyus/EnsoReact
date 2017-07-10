import React, {Component} from 'react';
import {TrainingDatePicker} from './trainingDatePicker';

const styles = {
  attendance: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export class NewAttendance extends Component {
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
                <div className="col-lg-4 col-xs-12">
                  <div className="form-group">
                    <label>Edzés időpontja</label>
                    <TrainingDatePicker/>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12">
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
                <div className="col-lg-4 col-xs-12">
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
                <div className="col-lg-2 col-xs-12">
                  <button type="submit" className="btn btn-default">Submit Button</button>
                  <button type="reset" className="btn btn-default">Reset Button</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
