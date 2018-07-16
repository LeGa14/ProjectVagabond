import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
    flex-shrink: 0;
`

export default class FootNav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <MenuWrapper>
                <Menu inverted>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </MenuWrapper>
        )
    }
}