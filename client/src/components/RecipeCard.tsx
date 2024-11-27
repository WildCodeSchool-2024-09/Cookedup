import "../assets/styles/RecipeCard.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { RecipeData } from "../types/Home";

function RecipeCard({ id, title, image }: RecipeData) {
  const [isFavorite, setIsFavorite] = useState(true);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <>
      <section className="recipe-card">
        <NavLink to={`/Recipe/${id}`}>
          <img
            src={image}
            alt={`Representation of ${title} recipe`}
            className="food-img"
          />
        </NavLink>
        <h3 className="recipe-title">{title}</h3>
        <section className="card-button">
          <button
            className="like-button"
            onClick={toggleFavorite}
            type="button"
          >
            {isFavorite ? "♡" : "🧡"}
          </button>
          <button className="cart-button" type="button">
            🛒
          </button>
        </section>
      </section>
    </>
  );
}

export default RecipeCard;
