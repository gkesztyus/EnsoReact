import React, {Component} from 'react';

const styles = {
  attendance: {
    fontWeight: 'bold'
  }
};

export class Attendance extends Component {
  render() {
    return (
      <div style={styles.attendance}>
        hello attendance!!!:)
      </div>
    );
  }
}
