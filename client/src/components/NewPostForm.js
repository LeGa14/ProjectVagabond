import React, { Component } from 'react';
import axios from 'axios';

class NewPostForm extends Component {
    state = {
        title = '',
        body = ''
    }

    handleChange = (event) => {
        const inputToTarget = event.target.name
        const userInput = event.target.value
        const newState = {...this.state}
        newState[inputToTarget] = userInput
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/cities/this.props.match.params.cityId/posts', this.state) //check this when city page is done
        .then((res) => {
            // this.props.history
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default NewPostForm;