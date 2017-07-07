import React, {Component} from 'react';
import {NewAttendance} from './newAttendance';

const styles = {
  attendance: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '40px'
  }
};

export class Attendance extends Component {
  render() {
    return (
      <div style={styles.attendance}>
        hello attendance!!!:)
        <button className="btn btn-primary" type="submit">Button</button>
        <NewAttendance/>
      </div>
    );
  }
}
