import React, { Component } from 'react';
import styled from 'styled-components'

const HomeBody = styled.div`
    p {
        display: flex;
        font-family: 'Bitter', serif;
        margin: 10vh auto;
        padding: 1vh 4vw;
        font-size: 1.5rem;
        color: rgb(197,198,199);
        background: rgba(0,0,0,0.5);
        border-radius: 5%;
        max-width: 100%;
    }
`

class HomePage extends Component {
    render() {
        return (
            <HomeBody>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers</p>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers</p>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers</p>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers</p>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers</p>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers</p>
             </HomeBody>
        );
    }
}

export default HomePage;
