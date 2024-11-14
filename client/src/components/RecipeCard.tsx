import { NavLink } from "react-router-dom";
import "../assets/style/RecetteCard.css";
import type { RecipeData } from "../types/Home";

function RecipeCard({ id, title, image }: RecipeData) {
  return (
    <>
      <section className="recipe-card">
        <NavLink to={`recipe/${id}`}>
          {" "}
          <img
            src={image}
            alt={`Representation of ${title}`}
            className="food-img"
          />
        </NavLink>

        <h3>{title}</h3>
        {/* <img src={cardStars} alt={"Recipe difficulty"} className="star-img" />
        <button type="button">{cardHeart}</button>
        <button type="button">{cardCart}</button> */}
      </section>
    </>
  );
}

export default RecipeCard;
