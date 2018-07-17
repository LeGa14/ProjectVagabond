import React, { Component } from 'react';
import axios from 'axios';
import CityShowWrapper from './styles/CityShowWrapper';
import { Button, Popup } from 'semantic-ui-react';

class IndividualCity extends Component {
  state = {
    name: '',
    img_url: ''
  }
  
  componentDidMount() {
    this.getCity()
  }

  getCity = () => {
    const cityId = this.props.match.params.city_id
    axios.get(`/api/cities/${cityId}`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          img_url: res.data.img_url
        })
      })
  }

  render() {
    return (
      <CityShowWrapper>
        <h1>{this.state.name}</h1>
        <img src={this.state.img_url} />
        <Popup trigger={<Button circular icon='plus' size='big' color='black' href='/cities/:city_id/posts/new' />} content='Add a new posts to this city'/>
      </CityShowWrapper>
    );
  }
}

export default IndividualCity;