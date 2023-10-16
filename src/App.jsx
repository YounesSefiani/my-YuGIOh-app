
import React, { useState } from 'react';
import './App.css';
import CharactersList from './perso';
import CharacterDetails from './description';
import MasterCard from './yugiohCard';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="app">
      <header className="navbar">
        <nav>
          <a href="#">Yu-Gi-Oh !</a>
          <a href="#">Yu-Gi-Oh ! GX</a>
          <a href="#">Yu-Gi-Oh ! 5Ds</a>
        </nav>
      </header>
      <div className="app-content">
        <CharactersList setSelectedCharacter={setSelectedCharacter} />
        <CharacterDetails character={selectedCharacter} />
        <MasterCard character={selectedCharacter} />
      </div>
    </div>
  );
}

export default App;
