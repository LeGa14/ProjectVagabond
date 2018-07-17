import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage';
import { Button, Icon } from 'semantic-ui-react'
import FootNav from './components/FootNav';
import DesktopNav from './components/DeskTopNav';

const AppBody = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  div {
    margin-top: 10vh;
    @media(min-height: 525px){
      margin-top: 2rem;
    }
  }
`
const Title = styled.h1`
  color: rgb(240,240,240);
  width: 100%;
  line-height: 20vw;
  font-size: 21vw;
  background-color: rgb(60,61,62);
  position: fixed;
  margin-top: 0;
  @media(min-width: 450px){
    line-height: 1em;
    font-size: 6.5em;
  }
  @media(min-height: 780px){
       visibility: hidden;
    }

`


class App extends Component {
  render() {
    return (
      <Router>
        <AppBody>
          <DesktopNav/>
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
