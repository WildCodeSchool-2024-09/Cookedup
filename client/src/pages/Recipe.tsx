import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { RecipeDetails, SimilarData } from "../types/Home";
import "../assets/styles/RecipePage.css";
import "../assets/styles/RecipeCard.css";
import RecipeCard from "../components/RecipeCard";

function Recipe() {
  const [recipeDetails, setRecipeDetails] = useState<null | RecipeDetails>();
  const [similars, setSimilar] = useState<null | SimilarData[]>(null);
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

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${MyApiKey}&number=3`,
    )
      .then((response) => response.json())
      .then((data) => {
        setSimilar(data);
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
              <div>
                {recipeDetails?.diets.map((diet) => {
                  return (
                    <p key={diet}>
                      {`#${diet.includes(" ") ? diet.split(" ").join("") : diet}`}
                    </p>
                  );
                })}
              </div>
            </section>
            <section className="header-recipe-buttons">
              <button type="button" className="add-list-button">
                Add to list
              </button>
            </section>
          </header>
          <main>
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
          </main>
          <footer className="footer-recipe">
            <h2>Envie de changer?</h2>

            <section className="recipe-similar">
              {similars?.map((sim) => {
                return (
                  <RecipeCard
                    key={sim.id}
                    id={sim.id}
                    title={sim.title}
                    image={`https://img.spoonacular.com/recipes/${sim.id}-556x370.${sim.imageType}`}
                  />
                );
              })}
            </section>
          </footer>
        </section>
      </section>
    </>
  );
}

export default Recipe;
