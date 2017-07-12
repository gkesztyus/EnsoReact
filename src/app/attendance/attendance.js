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
