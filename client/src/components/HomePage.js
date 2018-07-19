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
        font-size: 1rem;
        background-color: rgb(69,83,68);
        color: rgb(210,211,212);
        max-width: 100%;
        box-shadow: 1px 1px rgba(0,0,0,0.6);
        @media(orientation: landscape) {
            font-size: 1.5rem;
        }
        @media(min-width: 1133px){
        max-width: 906px;
        }
        @media(min-width: 1134px){
        max-width: 80%;
        }
    }
    
    .home-splash{
        height: 100vh;
        margin-top: 5vh;
    }
`
const ListIntro = styled.div`
    margin: 0 auto;
    font-size: 3rem;
    font-weight: 700;
    max-width:80%;
    background-color: rgb(69,83,68);
    color: rgb(210,211,212);
    box-shadow: 1px 1px rgba(0,0,0,0.6);
    line-height: 3rem;
    @media(min-width: 600px){
        width: 540px;
    }
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
                        <Card className>
                            <Link to={`/cities/${city.id}`}>
                                <Image src={city.img_url} />
                            </Link>
                            <Card.Content>
                                <Link to={`/cities/${city.id}`}>
                                    <Card.Header>{city.name}</Card.Header>
                                </Link>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='comment' />
                                <Link to={`/cities/${city.id}/`}>View Comments</Link>
                            </Card.Content>
                        </Card>
                    </CityCardStyle>
                </div>
            )
        })

        return (
            <HomeBody id='homeSplash'>
                <div className="home-splash" >
                    <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers. Post about your favorite cities and see what others have to say about the sites they have been to. Here at Vagabond, we love travel and nothing beats first-hand experiences, but we'd still love to hear about your adventures.</p>
                </div>
                <ListIntro id="cityList">Where have you Been?</ListIntro>
                {cityList}
            </HomeBody>
        );
    }
}

export default HomePage;
