import React, { Component } from 'react';
import { getSingleCharacter } from '../../../services/getSingleCharacter.js';
import Character from './Character.jsx';

export default class SingleCharacter extends Component {
  state = {
    character: null
  }

  
  componentDidMount() {
    getSingleCharacter(this.props.match.params.id)
      .then(character => this.setState({ character }));
  }
  
  
  render() {
    const { character } = this.state;
    if(!character) return <h1>Loading</h1>;
    return (
      <Character {...character} />
    );
  }
}
