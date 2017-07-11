import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
/* https://github.com/Hacker0x01/react-datepicker
https://hacker0x01.github.io/react-datepicker/#example-5 */

import 'react-datepicker/dist/react-datepicker.css';

export class TrainingDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <div className="hidden-xs">
          <DatePicker
            onChange={this.handleChange}
            selected={this.state.startDate}
            locale="hu-hu"
            todayButton={'Mai napon'}
            dateFormat="YYYY/MM/DD"
            />
        </div>
        <div className="hidden-sm hidden-md hidden-lg">
          <DatePicker
            onChange={this.handleChange}
            selected={this.state.startDate}
            todayButton={'Mai napon'}
            dateFormat="YYYY/MM/DD"
            locale="hu-hu"
            withPortal
            />
        </div>
      </div>

    );
  }
}
