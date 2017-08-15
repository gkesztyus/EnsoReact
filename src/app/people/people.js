import React, {Component} from 'react';
import {NewPerson} from './newPerson';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  person: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export class People extends Component {
  constructor(props) {
    super(props);
    // console.log('this on bind:', this);
    this.handleToggleNewPerson = this.handleToggleNewPerson.bind(this);

    this.state = {
      newPersonVisible: false
    };
  }

  handleToggleNewPerson() {
    // console.log('toggle++++', this);
    this.setState({
      newPersonVisible: !this.state.newPersonVisible
    });
  }

  render() {
    return (
      <div style={styles.person}>
        <div className={this.state.newPersonVisible ? '' : 'hidden'}>
          <NewPerson onCancel={this.handleToggleNewPerson}/>
        </div>
        <div className={this.state.newPersonVisible ? 'hidden' : ''}>
          <RaisedButton label="Személy hozzáadása" onClick={this.handleToggleNewPerson} primary/>
        </div>
      </div>
    );
  }
}
