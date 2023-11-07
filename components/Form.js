'use client';

import React, { Component } from 'react';
import Opinions from './Opinions';

// Provide 2 inputs for the user to enter a name and message, then a button to submit the form.

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: ''
    }
  }
  render() {
    return (
      <form>
        <input style={{color: 'red'}} type="text" value={this.state.name} onChange={ (event) => this.handleInputChange.bind(this)(event, "name") } placeholder="Your name" />
        <br></br>
        <input style={{color: 'red'}} type="text" value={this.state.message} onChange={ (event) => this.handleInputChange.bind(this)(event, "message") } placeholder="Your message" />
        <br></br>
        <button type="submit" onClick={this.onClick.bind(this)}>Send</button>
      </form>
    )
  }

  handleInputChange(event, type) {
    this.setState({
      [type]: event.target.value
    });
  }

  onClick(event) {
    const opinion = `Hello ${this.state.name}! Message: ${this.state.message}`
    this.props.addOpinion(opinion)
    event.preventDefault();
  }
}

export default Form;