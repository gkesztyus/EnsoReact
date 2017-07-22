import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';
import {Training} from './training/training';
import {People} from './people/people';
import {Transactions} from './transactions/transactions';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <Training/>
        <People/>
        <Transactions/>
        <main style={styles.main}>
          <Title/>
          <Techs/>
        </main>
        <Footer/>
      </div>
    );
  }
}
