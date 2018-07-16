import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage';
import { Button, Icon } from 'semantic-ui-react'
import FootNav from './components/FootNav';

const AppBody = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  div {
    margin-top: 10vh;
  }
`
const Title = styled.h1`
  color: rgb(240,240,240);
  width: 100%;
  line-height: 20vw;
  font-size: 21vw;
  background-color: #5F6062;
  position: fixed;
  @media(min-width: 310px){
    line-height: 1em;
    font-size: 12vh;
  }

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
          <FootNav/>
        </AppBody>
      </Router>
    );
  }
}

export default App;
