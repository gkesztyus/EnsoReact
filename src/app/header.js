import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  headerImage: {
    width: '50%',
    margin: '0 auto',
    padding: '20px 0'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <img style={styles.headerImage} src="/images/ensoBig.png"/>
      </header>
    );
  }
}
