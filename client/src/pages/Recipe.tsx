import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { RecipeData } from "../types/Home";
import "../assets/style/RecipePage.css";

function Recipe() {
  const [recipeDetails, setRecipeDetails] = useState<null | RecipeData>();
  const { id } = useParams();
  const MyApiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${MyApiKey}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeDetails(data);
      });
  }, [id]);

  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log(recipeDetails);

  return (
    <>
      <body className="main-recipe">
        <aside className="aside-recipe">
          <img
            src={recipeDetails?.image}
            alt={`Representation of ${recipeDetails?.title}`}
          />
        </aside>
        <section className="detail-recipe">
          <Link to={"/"} className="return-arrow">
            {" "}
            ↩
          </Link>
          <header className="header-recipe">
            <h1>{`${recipeDetails?.title}`}</h1>
            <p>{`Temps de préparation : ${recipeDetails?.readyInMinutes}mn`}</p>
            <p>Difficulté:</p>
            <button type="button" className="add-list-button">
              Add to list
            </button>
          </header>

          <section className="ingredients">
            <h2>Ingrédients:</h2>
            <article>
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
            </article>
          </section>
          <section className="preparation">
            <h2>Préparation:</h2>
            {recipeDetails?.analyzedInstructions?.[0].steps.map((el) => {
              return (
                <ul key={el.number}>
                  <li>
                    <p> Etape {el.number}</p>
                    <p>{el.step}</p>{" "}
                  </li>
                </ul>
              );
            })}
          </section>
        </section>
      </body>
    </>
  );
}

export default Recipe;
