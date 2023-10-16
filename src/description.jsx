import React from 'react';

const CharacterDetails = ({ character }) => {
  const characterData = {
    'Yugi Muto': {
      image: 'https://i.pinimg.com/originals/30/1a/1f/301a1f734bdbf385eba8a624c2fb9667.png',
      description: 'Yugi Muto est un jeune garçon chetif qui adore beaucoup les jeux. Cependant il n\'arrive pas à se faire des amis et devient le souffre douleur de la classe. Un jour, il découvre une boîte mystérieuse contenant des fragments d\'un artefact ancien, ressemblant à des pièces d\'un puzzle. Lorsque Yugi assembla toutes ces pièces, il découvre une autre personnalité, plus sombre et plus confiant. C\'est cette même personnalité qui affronte les ennemis les plus dangereux dans ce célèbre jeu de cartes du nom de "Duel Monsters".'
    },
    'Seto Kaiba': {
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddjitmb-2546a4be-4458-45a0-bc95-83c040e817d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRqaXRtYi0yNTQ2YTRiZS00NDU4LTQ1YTAtYmM5NS04M2MwNDBlODE3ZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Tqhy7KdT_EhzW0tJKwIbs3sHheO4T4vI4pRm4TRkSlg',
      description: 'Seto Kaiba est PDG de Kaiba Corporation, une multinationale spécialisé dans la technologie du jeu de cartes "Duel Monsters". Lorsque qu\'il a rencontré Yugi, il découvre que le grand-père de ce dernier possédait une carte très rare, celle du "Dragon Blanc aux Yeux Bleus". Kaiba a pris possession de cette carte et l\'a déchiré devant les yeux de Yugi et de son grand-père. Pour se venger de son grand-père, Yugi affronte Kaiba dans un duel et a fini de le vaincre grâce aux cartes "Exodia, le maudit" face aux trois Dragons Blancs. Son objectif est de dominer sur le marché de la technologie dans le monde. Mais il a également un autre objectif, vaincre une bonne fois pour toute son plus grand rival : Yugi Muto. ',
    },
    'Katsuya Jonouchi': {
      image: 'https://uploads2.yugioh.com/character/5/detail/detail/joey-l.png?1375717061',
      description: 'Jonouchi est le meilleur ami de Yugi Muto, bien que le début ne fut pas agréable. Avant que leur amitié débute, Jonouchi fut le persécuteur de Yugi, à un tel point qu\'il a jeté la dernière pièce du puzzle millénaire de Yugi dans la rivière. Mais lorsque Yugi l\'a défendu face à un voyou, Jonouchi réalise ses torts et repêche la pièce manquante. C\'est ainsi qu\'une amitié a débuté entre eux. Quand il découvre le jeu de cartes "Duel Monsters", il n\'était pas très bon, et son deck était déséquilibré. Lorsqu\'il apprend qu\'un tournoi fut organisé au Royaume des Duellistes, avec une énorme somme d\'argent en jeu, Jonouchi mise tout sur le tournoi pour remporter la somme et payer l\'opération de sa soeur, qui souffre d\'une maladie chronique des yeux. Depuis, Jonouchi mise tout sur sa chance pour remporter ce duel, et souhaite affronter son meilleur ami : Yugi Muto.',
    },
    'Pegasus J. Crawford' : {
      image: 'https://static.zerochan.net/Pegasus.J..Crawford.full.2585776.jpg',
      description: ''
    },
    'Malik Ishtar' : {
      image: 'https://w7.pngwing.com/pngs/143/290/png-transparent-yu-gi-oh-duel-links-marik-ishtar-seto-kaiba-yugi-mutou-ishizu-ishtar-yu-gi-oh-fictional-character-mai-valentine-seto-kaiba.png',
      description: 'Malik Ishtar fait partie de la famille des protecteurs du tombeau du Pharaon. Un soir, il devait passer le rituel du gardien du tombeau, dont la pratique non agréable a réveillé en lui une personnalité maléfique qui s\'est manifesté lorsqu\'il a pris possesion de la Baguette Millénaire. Depuis ce jour, Malik ressent de la haine pour le Pharaon, et souhaite accomplir son dessein : Récupérer les trois cartes des Dieux Egyptiens, prendre possession du Puzzle du Millénaire et du trône du Pharaon.'
    },
    'Bakura Ryo' : {
      image: 'https://static.wikia.nocookie.net/villains/images/3/3b/Yami_Bakura_DT.png/revision/latest?cb=20200823002210',
      description: ''
    },
  };

  return (
    <div className="character-details">
      <h2>{character}</h2>
      {characterData[character] ? (
        <>
          <img src={characterData[character].image} alt={character} />
          <p>{characterData[character].description}</p>
        </>
      ) : (
        <p>Personnage non sélectionné.</p>
      )}
    </div>
  );
};

export default CharacterDetails;
