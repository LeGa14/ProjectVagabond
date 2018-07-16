import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage';
import { Button, Icon } from 'semantic-ui-react'

const AppBody = styled.div`
  text-align: center;
`
const Title = styled.h1`
  color: rgb(240,240,240);
  margin-top: 10vh;
  line-height: 20vw;
  font-size: 21vw;
  background-color: #5F6062;
`
// const ButtonExampleAnimated = () => (
//  <div>
//    <Button animated>
//      <Button.Content visible>Next</Button.Content>
//      <Button.Content hidden>
//        <Icon name='right arrow' />
//      </Button.Content>
//    </Button>
//    <Button animated='vertical'>
//      <Button.Content hidden>Shop</Button.Content>
//      <Button.Content visible>
//        <Icon name='shop' />
//      </Button.Content>
//    </Button>
//    <Button animated='fade'>
//      <Button.Content visible>Sign-up for a Pro account</Button.Content>
//      <Button.Content hidden>$12.99 a month</Button.Content>
//    </Button>
//  </div>
// )

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
