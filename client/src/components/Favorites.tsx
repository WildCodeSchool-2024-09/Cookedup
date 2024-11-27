import { useState } from "react";
import "../assets/styles/Favorites.css";

function myFavorites() {
  const [isFavVisible, setIsFavVisible] = useState(false);
  const handleButtonFav = () => setIsFavVisible(!isFavVisible);

  return (
    <>
      <button className="open-fav" type="button" onClick={handleButtonFav}>
        🧡
      </button>
      <section className="favorites-container">
        {isFavVisible && (
          <section className="favorites-list">
            <h2>Mes Favoris</h2>
          </section>
        )}
      </section>
    </>
  );
}

export default myFavorites;
