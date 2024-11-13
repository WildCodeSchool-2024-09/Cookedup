import "./assets/style/RecetteCard.css";
import type { RecipeData } from "./types/Home";

function RecipeCard({ title, image, cardCart }: RecipeData) {
  return (
    <>
      <section className="recipe-card">
        <img
          src={image}
          alt={"Food representing the recipe"}
          className="food-img"
        />
        <h3>{title}</h3>
        <section className="card-button">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="button">{cardCart}</button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="button">{cardCart}</button>
        </section>
      </section>
    </>
  );
}

export default RecipeCard;
