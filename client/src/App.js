import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage';

const AppBody = styled.div`
  text-align: center;
`
const Title = styled.h1`
  text-align: left;
  color: rgb(240,240,240);
  margin: 5vh 0 0 5vw;
  margin-top: 5vh;
  line-height: 5vh;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppBody>
          <Title>Vagabond</Title>
          <Switch>
            <Route exact path='/' component={HomePage}/>
          </Switch>
        </AppBody>
      </Router>
    );
  }
}

export default App;
