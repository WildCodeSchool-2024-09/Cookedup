import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { RecipeData } from "../types/Home";

function Recipe() {
  const apiKey = "07d18ab9d2a9441d9e3148c6ff03a098";

  const [recipeDetails, setRecipeDetails] = useState<null | RecipeData>();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeDetails(data);
      });
  }, [id]);

  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log(recipeDetails?.analyzedInstructions?.[0].steps);

  return (
    <>
      <main>
        <aside className="aside-recipe">
          <img
            src={recipeDetails?.image}
            alt={`Representation of ${recipeDetails?.title}`}
          />
        </aside>
        <h1>{`${recipeDetails?.title}`}</h1>
        <p>{`Temps de préparation : ${recipeDetails?.readyInMinutes}mn`}</p>

        <section>
          <h2>Ingrédients:</h2>
          <details>
            {recipeDetails?.extendedIngredients?.map((ingredient) => {
              return (
                <figure key={ingredient.id}>
                  <img
                    src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                    alt={ingredient.name}
                  />
                  <figcaption>{ingredient.name} </figcaption>
                </figure>
              );
            })}
          </details>
          <h2>Préparation:</h2>
          {recipeDetails?.analyzedInstructions?.[0].steps.map((el) => {
            return (
              <ul key={el.number}>
                <li>
                  <p>{el.number}</p>
                  <p>{el.step}</p>{" "}
                </li>
              </ul>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Recipe;
