import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { RecipeDetails } from "../types/Home";
import "../assets/styles/RecipePage.css";

function Recipe() {
  const [recipeDetails, setRecipeDetails] = useState<null | RecipeDetails>();
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

  return (
    <>
      <section className="main-recipe">
        <Link to={"/"} className="return-arrow">
          ↩
        </Link>
        <aside className="aside-recipe">
          <img
            src={recipeDetails?.image}
            alt={`Representation of ${recipeDetails?.title}`}
          />
        </aside>
        <section className="detail-recipe">
          <header className="header-recipe">
            <h1>{`${recipeDetails?.title}`}</h1>
            <section className="header-recipe-info">
              <p>{`Temps de préparation : ${recipeDetails?.readyInMinutes}mn`}</p>
              <p>
                {recipeDetails?.diets.map((diet) => {
                  return <span key={diet}>#{diet} </span>;
                })}{" "}
              </p>
            </section>
            <section className="header-recipe-buttons">
              <button type="button" className="add-list-button">
                Add to list
              </button>
            </section>
          </header>

          <section className="ingredients">
            <h2>Ingrédients:</h2>
            <article>
              {recipeDetails?.extendedIngredients.map((ingredient) => {
                return (
                  <figure key={ingredient.id}>
                    <img
                      src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                      alt={ingredient.name}
                    />
                    <figcaption>
                      {`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                    </figcaption>
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
      </section>
    </>
  );
}

export default Recipe;
