import React from 'react';

const MasterCard = ({ character }) => {
  const masterCardData = {
    'Yugi Muto': 'https://cdn.cardsrealm.com/images/cartas/ct13-2016-mega-tins/en/med/dark-magician-en003.png?7631',
    'Seto Kaiba': 'https://cdn.cardsrealm.com/images/cartas/ct13-2016-mega-tins/en/med/blue-eyes-white-dragon-en008.png?2588',
    'Katsuya Jonouchi': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dbbn3ht-64ac5038-bf45-4934-a9de-73ae0feabaab.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyN2ZlNzIxLTg0NmYtNGY3NS1hYzYxLTExMWNhMDBiMjdkZFwvZGJibjNodC02NGFjNTAzOC1iZjQ1LTQ5MzQtYTlkZS03M2FlMGZlYWJhYWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VKBcFKt6oTgN-6w25kWSMvjxqW2oGiwBzc6kV3EdUb4',
  };

  return (
    <div className="master-card">
      <h2>Carte Maîtresse</h2>
      {character && masterCardData[character] ? (
        <img src={masterCardData[character]} alt={`${character} Master Card`} />
      ) : (
        <p>Sélectionnez un personnage pour voir sa carte maîtresse.</p>
      )}
    </div>
  );
};

export default MasterCard;
