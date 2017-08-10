import React, {Component} from 'react';
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';
import {Training} from './training/training';
import {People} from './people/people';
import {Transactions} from './transactions/transactions';
import {Menu} from './menu';
import {BrowserRouter, Route} from 'react-router-dom';

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
        <Menu/>
        <BrowserRouter>
          <div className="container">
            <Route path="/people" component={People}/>
            <Route path="/training" component={Training}/>
            <Route path="/transactions" component={Transactions}/>
          </div>
        </BrowserRouter>
        <main style={styles.main}>
          <Title/>
          <Techs/>
        </main>
        <Footer/>
      </div>
    );
  }
}
