import "../assets/styles/RecipeCard.css";
import { NavLink } from "react-router-dom";
import type { RecipeData } from "../types/Home";

function RecipeCard({ id, title, image }: RecipeData) {
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
        <h3>{title}</h3>
        <section className="card-button">
          <button type="button">🧡</button>
          <button type="button">🛒</button>
        </section>
      </section>
    </>
  );
}

export default RecipeCard;
