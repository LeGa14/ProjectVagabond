import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TitleNav = styled.h1`
  color: rgb(240,240,240);
  width: 100%;
  line-height: 20vw;
  font-size: 21vw;
  background-color: rgb(70,71,72);
  position: fixed;
  z-index: 2;
  h1{
      margin-bottom: 0;
      line-height: 5.7rem;
      font-size: 6rem;
      @media(max-width: 640px){
        font-size: 13vw;
        line-height: 12vw;
      }
  }
  a {
    padding: 0;
    margin: 0;
  }
  .ui.menu .item{
      color: rgb(213,214,215)
  }
  .ui.secondary.pointing.menu .active.item{
      color: rgb(248,249,250)
  }
  @media(max-height: 749px){
       visibility: hidden;
    }
    max-width: 100%;
`


export default class DesktopNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <TitleNav>
        <Menu pointing secondary>
        <h1>Vagabond</h1>
          <Link to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
          <Menu.Item
            name='Login'
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Sites'
            active={activeItem === 'Sites'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </TitleNav>
    )
  }
}