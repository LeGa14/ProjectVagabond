import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.form`
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 90vh;
    h1 {
        grid-column: 2;
        grid-row: 1;
    }
    form {
        grid-column: 2;
        grid-row: 2;
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

class NewPostForm extends Component {
    state = {
        title: '',
        body: '',
        user_id: 1
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
        axios.post(`/api/cities/${this.props.match.params.city_id}/posts`, this.state)
            .then((res) => {
                this.props.history.push(`/cities/${city_id}`)
            }).catch((err) => {
                console.error(err)
            })
    }

    render() {
        return (
            <Wrapper>
                <h1>New Post</h1>
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
                    <input
                        type="submit"
                        value="Post"
                    />
                </form>
            </Wrapper>
        );
    }
}

export default NewPostForm;