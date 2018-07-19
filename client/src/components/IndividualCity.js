import React, { Component } from 'react';
import axios from 'axios';
import CityShowWrapper from './styles/CityShowWrapper';
import { Button, Popup, Comment, Header, Icon } from 'semantic-ui-react';
import distanceInWords from 'date-fns/distance_in_words'
class IndividualCity extends Component {
  state = {
    city: {},
    posts: []
  }

  componentDidMount() {
    this.getCityAndPosts()
  }

  getCityAndPosts = async () => {
    try {
      const cityId = this.props.match.params.city_id
      let cityResponse = await axios.get(`/api/cities/${cityId}`)
      let postsResponse = await axios.get(`/api/cities/${cityId}/posts`)
      this.setState({
        city: cityResponse.data,
        posts: postsResponse.data
      })
      console.log(this.state)
    } catch (err) {
      console.error(err)
    }
  }

  postDelete = async (id) => {
    const deletePost = await axios.delete(`/api/cities/${this.state.city.id}/posts/${id}`)
    const setNewState = await axios.get(`/api/cities/${this.state.city.id}/posts`)

    this.setState({
      posts: setNewState.data
    })
    }
 

  render() {
    return (
      <CityShowWrapper>
        <h1>{this.state.city.name}</h1>
        <img src={this.state.city.img_url} />
        <p>
        <Header as='h3' dividing>
          Posts
          <Popup trigger={<Button circular icon='plus' size='big' color='black' href={`/cities/${this.state.city.id}/posts/new`} />} content='Add a new posts to this city' />
        </Header>
        {this.state.posts.reverse().map((post) => {
          const trunicate = post.body.substring(0,254)
          let relative = distanceInWords(post.created_at, new Date())
          return (
            <Comment>
              <Comment.Content>
                <Comment.Author as='a' href={`/cities/${this.state.city.id}/posts/${post.id}`}>{post.title}</Comment.Author>
                <Comment.Metadata>
                  <div>{relative}</div>
                </Comment.Metadata>
                <Comment.Text>{trunicate}</Comment.Text>
                <Button
                  href={`/cities/${this.state.city.id}/posts/${post.id}/edit`}
                  size='mini'
                  icon
                  labelPosition='left'>
                  <Icon name='edit' />
                  Edit
                </Button>
                <Button
                  onClick={()=> this.postDelete(post.id)}
                  size='mini'
                  icon
                  labelPosition='left'>
                  <Icon name='window close' />
                  Remove Comment
                </Button>
              </Comment.Content>
            </Comment>
          )
        })}
        </p>
      </CityShowWrapper>
    );
  }
}

export default IndividualCity;