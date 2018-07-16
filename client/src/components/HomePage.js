import React, { Component } from 'react';
import styled from 'styled-components'

const HomeBody = styled.div`
    p {
        margin: 10vh auto;
        
    }
`

class HomePage extends Component {
    render() {
        return (
            <HomeBody>
                <p>Weclome to your New number 1 app for seeing sites and connecting with other Travelers</p>
            </HomeBody>
        );
    }
}

export default HomePage;
