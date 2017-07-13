import React, {Component} from 'react';
import {NewAttendance} from './newAttendance';

const styles = {
  attendance: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export class Attendance extends Component {
  constructor(props) {
    super(props);
    // console.log('this on bind:', this);
    this.handleToggleNewAttendance = this.handleToggleNewAttendance.bind(this);

    this.state = {
      newAttendanceVisible: false
    };
  }

  handleToggleNewAttendance() {
    // console.log('toggle++++', this);
    this.setState({
      newAttendanceVisible: !this.state.newAttendanceVisible
    });
  }

  render() {
    return (
      <div style={styles.attendance}>
        <div className={this.state.newAttendanceVisible ? '' : 'hidden'}>
          <NewAttendance onCancel={this.handleToggleNewAttendance}/>
        </div>
        <div className={this.state.newAttendanceVisible ? 'hidden' : ''}>
          <button type="button" className="btn btn-primary" onClick={this.handleToggleNewAttendance}>Edzés hozzáadása</button>
        </div>
      </div>
    );
  }
}
