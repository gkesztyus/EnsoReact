import React, {Component} from 'react';
import {NewTraining} from './newTraining';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  training: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export class Training extends Component {
  constructor(props) {
    super(props);
    // console.log('this on bind:', this);
    this.handleToggleNewTraining = this.handleToggleNewTraining.bind(this);

    this.state = {
      newTrainingVisible: false
    };
  }

  handleToggleNewTraining() {
    // console.log('toggle++++', this);
    this.setState({
      newTrainingVisible: !this.state.newTrainingVisible
    });
  }

  render() {
    return (
      <div style={styles.training}>
        <div className={this.state.newTrainingVisible ? '' : 'hidden'}>
          <NewTraining onCancel={this.handleToggleNewTraining}/>
        </div>
        <div className={this.state.newTrainingVisible ? 'hidden' : ''}>
          <RaisedButton label="Edzés hozzáadása" onClick={this.handleToggleNewTraining} primary/>
        </div>
      </div>
    );
  }
}
