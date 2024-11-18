import RecipeCard from "../components/RecipeCard";
import "../assets/style/RecetteCard.css";
import { useEffect, useState } from "react";
import type { RecipeData } from "../types/Home";

function Home() {
  const [recipes, setRecipes] = useState<null | RecipeData[]>(null);
  const MyApiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${MyApiKey}&number=6`,
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
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
