import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const Wrapper = styled.form`
      margin: auto;
      margin-top: 10vh;
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      height: 90vh;
      h1 {
          grid-column: 2;
          grid-row: 1;
          background-color: rgb(69,83,68);
          color: rgb(210,211,212);
          font-family: 'Bitter', serif;
      }
      form {
          grid-column: 2;
          grid-row: 2;
          background-color: rgb(69,83,68);
          padding: 10% 2%;
          label {
            color: rgb(210,211,212);
            font-family: 'Bitter', serif;
            font-size: 1.5rem;
          }
      }
  `

const StyledInput = styled.input`
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
  `

const StyledTextArea = styled.textarea`
      width: 100%;
      height: 150px;
      padding: 12px 20px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      background-color: #f8f8f8;
      resize: none;
  `
class EditPostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    this.fetchPost()
  }

  fetchPost = () => {
    const cityId = this.props.match.params.city_id
    const postId = this.props.match.params.post_id
    axios.get(`/api/cities/${cityId}/posts/${postId}`)
      .then((res) => {
        this.setState({
          title: res.data.title,
          body: res.data.body
        })
      }).catch((err) => {
        console.error(err)
      })
  }

  handleChange = (event) => {
    const inputToTarget = event.target.name
    const userInput = event.target.value
    const newState = { ...this.state }
    newState[inputToTarget] = userInput
    this.setState(newState)
  }

  handleSubmit = (event) => {
    const city_id = this.props.match.params.city_id
    event.preventDefault()
    axios.patch(`/api/cities/${this.props.match.params.city_id}/posts/${this.props.match.params.post_id}`, this.state)
      .then((res) => {
        this.props.history.push(`/cities/${city_id}`)
      }).catch((err) => {
        console.error(err)
      })
  }

  render() {
    return (
      <Wrapper>
        <h1>Edit Post</h1>
        <form onSubmit={this.handleSubmit}>
          <label for='title'>Title:</label>
          <StyledInput
            id='title'
            type='text'
            name='title'
            value={this.state.title}
            onChange={(event) => this.handleChange(event)}
          />
          <label for='body'>Body:</label>
          <StyledTextArea
            id='body'
            type='text'
            name='body'
            value={this.state.body}
            onChange={(event) => this.handleChange(event)}
          />
          <Button
            class="submit"
            type="submit"
            value="post"
            size='mini'
            icon
            labelPosition='left'>
            <Icon name='pencil alternate' />
            Confirm Edit
          </Button>
          <Button
            as={Link} to={`/cities/${this.props.match.params.city_id}`}
            size='mini'
            icon
            labelPosition='left'>
            <Icon name='cancel' />
            Cancel Edit
          </Button>
        </form>
      </Wrapper>
    );
  }
}

export default EditPostForm;