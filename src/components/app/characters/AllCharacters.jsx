import React, { Component } from 'react';
import { getCharacterList } from '../../../services/getCharacters.js';
import CharacterList from './CharacterList.jsx';
// import getSingleCharacter from '../../../services/getSingleCharacter';

export default class AllCharacters extends Component {
  state = {
    characters: []
  }

  
  componentDidMount() {
    getCharacterList()
      .then(characters => this.setState({ characters }));
  }
  
  
  render() {
    // const character = getSingleCharacter(2);
    // console.log('-----------------', character);
    const { characters } = this.state;

    return (
      <CharacterList characters={characters} />
    );
  }
}
