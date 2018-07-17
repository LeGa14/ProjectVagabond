import React, { Component } from 'react';
import axios from 'axios';

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
      <div>
        <h1>Working In Individual City</h1>
        <img src={this.state.img_url} />
      </div>
    );
  }
}

export default IndividualCity;