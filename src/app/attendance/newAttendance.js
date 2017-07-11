import React, {Component} from 'react';
import {TrainingDatePicker} from './trainingDatePicker';

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
  }
  handleCancel() {
    this.props.onCancel();
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
                    <button type="submit" className="btn btn-primary">Mentés</button>
                    <button type="button" className="btn btn-default" onClick={handleCancel}>Mégsem</button>
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
