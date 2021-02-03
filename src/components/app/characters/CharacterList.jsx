import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character.jsx';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const characterFrame = characters.map(character => (
    <li key={character.id}>
      <Link to={`/details/${character.id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));


  return (
    <ul>
      {characterFrame}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
