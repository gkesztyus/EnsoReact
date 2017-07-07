import React, {Component} from 'react';

const styles = {
  attendance: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '40px'
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
            <div className="row">
              <div className="col-lg-6">
                <form role="form">
                  <div className="form-group">
                    <label>Edzésvezető</label>
                    <select multiple className="form-control">
                      <option>Kesztyűs Gábor</option>
                      <option>Kéri Dávid</option>
                      <option>Hegyes Endre</option>
                      <option>Bugris Valéria</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Résztvevők</label>
                    <select multiple className="form-control">
                      <option>Kesztyűs Gábor</option>
                      <option>Kéri Dávid</option>
                      <option>Hegyes Endre</option>
                      <option>Bugris Valéria</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-default">Submit Button</button>
                  <button type="reset" className="btn btn-default">Reset Button</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
