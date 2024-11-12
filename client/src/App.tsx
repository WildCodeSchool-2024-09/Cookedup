import { useState } from "react";
import RecetteCard from "./RecetteCard";
import RecettesList from "./RecettesArray";
import "./assets/style/RecetteCard.css";

function App() {
  // uitliser deux useState : un "Favoris" et un "Panier"
  const [mesFavoris, setMesFavoris] = useState([]);

  function addFavorite() {
    setMesFavoris(mesFavoris);
  }

  return (
    <>
      {/* <RecetteCard 
    imgSrc={RecettesList[0].imgSrc} 
    recetteTitle={RecettesList[0].recetteTitle} 
    cardStars={RecettesList[0].cardStars} 
    cardHeart={RecettesList[0].cardHeart}/> */}

      <section className="recetteListe">
        {RecettesList.map((value) => (
          <RecetteCard
            key={value.recetteTitle}
            {...value}
            addFavorite={addFavorite}
          />
        ))}
      </section>
    </>
  );
}

export default App;
