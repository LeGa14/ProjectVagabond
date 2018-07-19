import React, { Component } from 'react';
import axios from 'axios';
import CityShowWrapper from './styles/CityShowWrapper';
import { Comment, Header } from 'semantic-ui-react';


class ShowPost extends Component {
    state = {
        city: {},
        post: {}
    }

    componentDidMount() {
        this.getCityAndPost()
    }

    getCityAndPost = async () => {
        try {
            const cityId = this.props.match.params.city_id
            const postId = this.props.match.params.post_id
            let cityResponse = await axios.get(`/api/cities/${cityId}`)
            let postResponse = await axios.get(`/api/cities/${cityId}/posts/${postId}`)
            this.setState({
                city: cityResponse.data,
                post: postResponse.data
            })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <CityShowWrapper>
                <h1>{this.state.post.name}</h1>
                <img src={this.state.city.img_url} alt={`arieal of ${this.state.city.name}`}/>
                <p>
                    <Header as='h3' dividing>
                        {`Here's what >User Name Here< had to say about ${this.state.city.name}`}
                    </Header>
                    <div className="post-show-body">
                    <h2>
                        <Comment.Author>{this.state.post.title}</Comment.Author>
                    </h2>
                    <Comment.Text>{this.state.post.body}</Comment.Text>
                    </div>
                    {/* {this.state.post.map((post) => {
          return (
            <Comment>
              <Comment.Content>
              <Comment.Author as='a'>{post.title}</Comment.Author>
              <Comment.Metadata>
                <div>{post.created_at}</div>
              </Comment.Metadata>
              <Comment.Text>{post.body}</Comment.Text>
              </Comment.Content>
            </Comment>
          )
        }
        )} */}
                </p>
            </CityShowWrapper>
        );
    }
}

export default ShowPost;