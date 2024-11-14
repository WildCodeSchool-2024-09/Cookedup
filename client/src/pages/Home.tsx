import RecipeCard from "../components/RecipeCard";
import "../assets/style/RecetteCard.css";
import { useEffect, useState } from "react";
import type { RecipeData } from "../types/Home";

function Home() {
  const [recipes, setRecipes] = useState<null | RecipeData[]>(null);

  const apiKey = "07d18ab9d2a9441d9e3148c6ff03a098";

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`,
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
        // biome-ignore lint/suspicious/noConsoleLog: <explanation>
        console.log(data.recipes);
      });
  }, []);

  return (
    <>
      <main>
        <section className="recipe-list">
          {recipes?.map((element) => (
            <RecipeCard
              key={element.id}
              id={element.id}
              title={element.title}
              image={element.image}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
