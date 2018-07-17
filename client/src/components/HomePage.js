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
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers. Post about your favorite cities and see what others have to say about the sites they have been to. Here at Vagabond, we love travel and nothing beats first-hand experiences, but we'd still love to hear about your adventures.</p>
            </HomeBody>
        );
    }
}

export default HomePage;
