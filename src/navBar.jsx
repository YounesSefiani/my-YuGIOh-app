import React from 'react';
import './navBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Accueil</a></li>
        <li className="nav-item"><a href="#">Cartes</a></li>
        <li className="nav-item"><a href="#">Decks</a></li>
        <li className="nav-item"><a href="#">À propos</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
