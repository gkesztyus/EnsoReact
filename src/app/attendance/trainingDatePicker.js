import React, {Component} from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
// https://github.com/clauderic/react-infinite-calendar
// Render the Calendar
const today = new Date();
const CalendarStyleObject = {
  accentColor: '#448AFF',
  floatingNav: {
    background: 'rgba(56, 87, 138, 0.94)',
    chevron: '#FFA726',
    color: '#FFF'
  },
  headerColor: '#2e6da4',
  selectionColor: '#559FFF',
  textColor: {
    active: '#FFF',
    default: '#333'
  },
  todayColor: '#FFA726',
  weekdayColor: '#337ab7'
};

export class TrainingDatePicker extends Component {
  render() {
    return (
      <InfiniteCalendar
        width={300}
        height={300}
        selected={today}
        theme={CalendarStyleObject}
        />
    );
  }
}
