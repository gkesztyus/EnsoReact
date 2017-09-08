import React, {Component} from 'react';

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#cf4646',
    color: 'white'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  }
};

export class Title extends Component {
  render() {
    return (
      <div style={styles.title}>
        <h1 style={styles.h1}>Dojo Manager</h1>
      </div>
    );
  }
}
