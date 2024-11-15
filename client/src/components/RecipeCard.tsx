import "../assets/style/RecetteCard.css";
import type { RecipeData } from "../types/Home";

function RecipeCard({ title, image }: RecipeData) {
  return (
    <>
      <section className="recipe-card">
        <img
          src={image}
          alt={`Representation of ${title} recipe`}
          className="food-img"
        />
        <h3>{title}</h3>
        <section className="card-button">
          <button type="button">🛒</button>
          <button type="button">🧡</button>
        </section>
      </section>
    </>
  );
}

export default RecipeCard;
