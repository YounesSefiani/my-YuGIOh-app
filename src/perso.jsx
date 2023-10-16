import React from 'react';

const CharactersList = ({ setSelectedCharacter }) => {
  const characters = ['Yugi Muto', 'Seto Kaiba', 'Katsuya Jonouchi', 'Pegasus J. Crawford', 'Malik Ishtar', 'Bakura Ryo',];

  return (
    <div className="characters-window">
      <h2>Personnages</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index} onClick={() => setSelectedCharacter(character)}>
            {character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;

