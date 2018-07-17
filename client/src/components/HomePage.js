import React, { Component } from 'react';
import styled from 'styled-components'
import { Card, Icon, Image } from 'semantic-ui-react'
import CityCardStyle from './styles/CityCardstyles';

const HomeBody = styled.div`
    p {
        display: flex;
        font-family: 'Bitter', serif;
        margin: 10vh auto;
        margin-bottom: 35rem;
        padding: 1vh 4vw;
        font-size: 1.5rem;
        color: rgb(197,198,199);
        background: rgba(0,0,0,0.8);
        border-radius: 5%;
        max-width: 100%;
        box-shadow: 2px 3px rgba(0,0,0,0.6);
        @media(max-width: 660px) {
            font-size: 1rem;
        }
    }
`
const ListIntro = styled.div`
    margin: 0 auto;
    font-size: 3rem;
    font-weight: 700;
    max-width:80%;
    color: rgb(209,210,211);
    background-color: rgba(29,30,31,0.9);
    line-height: 3rem;
    border-radius: 4%;
`

class HomePage extends Component {
    render() {
        return (
            <HomeBody>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers. Post about your favorite cities and see what others have to say about the sites they have been to. Here at Vagabond, we love travel and nothing beats first-hand experiences, but we'd still love to hear about your adventures.</p>
                    <ListIntro>Where have you Been?</ListIntro>
                <CityCardStyle>
                    <Card>
                        <Image src='https://images.unsplash.com/photo-1504889100631-d557a48f0d30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e0bbe98f30034814a40c517f9d261b9&auto=format&fit=crop&w=676&q=80' />
                        <Card.Content>
                            <Card.Header>Atlanta</Card.Header>
                            <Card.Meta>Where we call "Home"</Card.Meta>
                            <Card.Description>A thriving metropolitan city situated in the South-East United States.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='comment' />
                                {/* we can do a comment count here if desired */}
                                Comments
                             </a>
                        </Card.Content>
                    </Card>
                </CityCardStyle>
            </HomeBody>
        );
    }
}

export default HomePage;
