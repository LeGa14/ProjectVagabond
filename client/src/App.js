import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import { Button, Icon } from 'semantic-ui-react'
import FootNav from './components/FootNav'
import DesktopNav from './components/DeskTopNav'
import IndividualCity from './components/IndividualCity'
import NewPostForm from './components/NewPostForm'
import EditPostForm from './components/EditPostForm';
import ShowPost from './components/ShowPost'


const AppBody = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  div {
    margin-top: 10vh;
    @media(min-height: 525px){
      margin-top: 2rem;
    }
  }

  .post-show-body {
    background: white;
    border: 1vw solid rgb(69,83,68);
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
  z-index: 4;
  @media(min-width: 450px){
    line-height: 1em;
    font-size: 6.5em;
  }
  @media(min-height: 750px){
       visibility: hidden;
    }
`

const FootSpacer = styled.div`
    height: 15vh;
    width: 100%;
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
            <Route exact path='/cities/:city_id' component={IndividualCity}/>
            <Route exact path='/cities/:city_id/posts/new' component={NewPostForm}/>
            <Route exact path='/cities/:city_id/posts/:post_id/edit' component={EditPostForm}/>
            <Route exact path='/cities/:city_id/posts/:post_id' component={ShowPost}/>
          </Switch>
          <FootSpacer/>
          <FootNav/>
        </AppBody>
      </Router>
    );
  }
}

export default App;
