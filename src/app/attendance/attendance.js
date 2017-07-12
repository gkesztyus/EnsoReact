/* eslint-disable */
import React, {Component} from 'react';
import {NewAttendance} from './newAttendance';

const styles = {
  attendance: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export class Attendance extends Component {
  constructor() {
    super();
    this.handleToggleNewAttendance = this.handleToggleNewAttendance.bind(this);
    this.state = {
      newAttendanceVisible: false
    };
  }

  handleToggleNewAttendance() {
    this.setState({
      newAttendanceVisible: !this.state.newAttendanceVisible
    });
  }

  render() {
    let newAttendanceSection;
    if (this.state.newAttendanceVisible) {
      newAttendanceSection = <NewAttendance onCancel={this.handleToggleNewAttendance}/>;
    } else {
      newAttendanceSection = <button className="btn btn-primary" type="button" onClick={this.handleToggleNewAttendance}>Edzés hozzáadása</button>;
    }

    return (
      <div style={styles.attendance}>
        hello attendance!!!:)
        {newAttendanceSection}
      </div>
    );
  }
}
