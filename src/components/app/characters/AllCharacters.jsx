import React, { Component } from 'react';
import { getCharacterList } from '../../../services/getCharacters.js';
import CharacterList from './CharacterList.jsx';

export default class AllCharacters extends Component {
  state = {
    characters: []
  }

  
  componentDidMount() {
    getCharacterList()
      .then(characters => this.setState({ characters }));
  }
  
  
  render() {
    const { characters } = this.state;

    return (
      <CharacterList characters={characters} />
    );
  }
}
