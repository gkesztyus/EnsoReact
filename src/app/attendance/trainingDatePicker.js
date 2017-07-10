import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

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
            todayButton={'Mai napon'}
            />
        </div>
        <div className="hidden-sm hidden-lg">
          <DatePicker
            onChange={this.handleChange}
            selected={this.state.startDate}
            todayButton={'Mai napon'}
            withPortal
            />
        </div>
      </div>

    );
  }
}
