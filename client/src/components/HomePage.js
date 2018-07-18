import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react'
import CityCardStyle from './styles/CityCardstyles';
import { Link } from 'react-router-dom'

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

    state = {
        cities: []
    }

    componentDidMount() {
        this.fetchCities()
    }

    fetchCities = () => {
        axios.get('/api/cities').then((res) => {
            console.log(res.data)
            this.setState({ cities: res.data })
        })
    }

    render() {

        const cityList = this.state.cities.map((city) => {
            return (
                <div>
                <CityCardStyle key={city.id}>
                    <Card>
                        <Image src={city.img_url} />
                        <Card.Content>
                            <Card.Header>{city.name}</Card.Header>
                            {/* <Card.Meta>Where we call "Home"</Card.Meta>
                            <Card.Description>A thriving metropolitan city situated in the South-East United States.</Card.Description> */}
                        </Card.Content>
                        <Card.Content extra>
                                <Icon name='comment' />
                                {/* we can do a comment count here if desired */}
                                <Link to={`/cities/${city.id}`}>View Comments</Link>
                        </Card.Content>
                    </Card>
                </CityCardStyle>
              </div>
            )
        })

        return (
            <HomeBody>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers. Post about your favorite cities and see what others have to say about the sites they have been to. Here at Vagabond, we love travel and nothing beats first-hand experiences, but we'd still love to hear about your adventures.</p>
                <ListIntro>Where have you Been?</ListIntro>
                {cityList}
            </HomeBody>
        );
    }
}

export default HomePage;
