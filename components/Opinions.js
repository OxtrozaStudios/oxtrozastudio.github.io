'use client';

import React, { Component } from 'react';

class Opinions extends Component {

  render() {
    return ( // Using index as key is not recommended
      <div>
        <h2>Opinions</h2>
        <ul>
          {this.props.opinions.map((opinion, index) => <li key={index}>{opinion}</li>)}
        </ul>
      </div>
    )
  }
}

export default Opinions;