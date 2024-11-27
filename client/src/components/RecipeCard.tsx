import "../assets/styles/RecipeCard.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { Ingredient, RecipeCardProps } from "../types/Home";

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(true);

  const transformedIngredients = recipe.extendedIngredients?.map(
    (ingredient: {
      name: string;
      measures: { metric: { amount: number; unitShort: string } };
    }) => ({
      title: ingredient.name,
      quantity: ingredient.measures.metric.amount,
      unit: ingredient.measures.metric.unitShort,
    }),
  );
  function updateLocalStorage(
    mainArrayKey: string,
    newObjects: Ingredient[],
  ): Ingredient[] {
    const mainArray: Ingredient[] = JSON.parse(
      localStorage.getItem(mainArrayKey) || "[]",
    );

    for (const newObj of newObjects) {
      const existingObj = mainArray.find((obj) => obj.title === newObj.title);

      if (existingObj) {
        existingObj.quantity += newObj.quantity;
      } else {
        mainArray.push(newObj);
      }
    }

    localStorage.setItem(mainArrayKey, JSON.stringify(mainArray));

    return mainArray;
  }
  const mainArrayKey = "ingredientsList";
  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <>
      <section className="recipe-card">
        <NavLink to={`Recipe/${recipe.id}`}>
          <img
            src={recipe.image}
            alt={`Representation of ${recipe.title} recipe`}
            className="food-img"
          />
        </NavLink>
        <h3 className="recipe-title">{recipe.title}</h3>
        <section className="card-button">
          <button
            className="like-button"
            onClick={toggleFavorite}
            type="button"
          >
            {isFavorite ? "♡" : "🧡"}
          </button>
          <button
            className="cart-button"
            onClick={() =>
              updateLocalStorage(mainArrayKey, transformedIngredients || [])
            }
            type="button"
          >
            🛒
          </button>
        </section>
      </section>
    </>
  );
};

export default RecipeCard;
