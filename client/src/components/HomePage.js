import React, { Component } from 'react';
import styled from 'styled-components'

const HomeBody = styled.div`
    p {
        margin: 10vh auto;
        font-size: 5vw;
        color: #555358;
        background: rgba(0,0,0,0.1);
        border-radius: 5%;
    }
`

class HomePage extends Component {
    render() {
        return (
            <HomeBody>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers</p>
            </HomeBody>
        );
    }
}

export default HomePage;
