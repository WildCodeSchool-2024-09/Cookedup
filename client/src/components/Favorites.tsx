import { useState } from "react";
import "../assets/styles/Favorites.css";

function myFavorites() {
  const [isFavVisible, setIsFavVisible] = useState(false);
  const handleButtonFav = () => setIsFavVisible(!isFavVisible);

  return (
    <>
      <button
        className="open-fav-button"
        type="button"
        onClick={handleButtonFav}
      >
        🧡
      </button>
      {isFavVisible && (
        <>
          <section className="favorites-background" />
          <section className="favorites-list">
            <h1> Mes recettes favorites </h1>
            <button
              type="button"
              className="closing-fav-list-button"
              onClick={handleButtonFav}
            >
              ✖
            </button>
          </section>
        </>
      )}
    </>
  );
}

export default myFavorites;
