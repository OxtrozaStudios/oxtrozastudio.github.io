'use client';

import React, { Component } from 'react';
import Form from './Form';
import Opinions from './Opinions';

class FormParent extends Component {
  constructor() {
    super();
    this.state = {
      opinions: []
    }
  }

  addOpinion(opinion) {
    this.setState(prevState => ({
      opinions: [...prevState.opinions, opinion]
    }));
  }

  render() {
    return (
      <div>
        <Form addOpinion={this.addOpinion.bind(this)} />
        <Opinions opinions={this.state.opinions} />
      </div>
    )
  }
}

export default FormParent;