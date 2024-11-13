import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard";
import "../assets/style/RecetteCard.css";
import type { RecipeData } from "../types/Home";

function Home() {
  const [data, setData] = useState<[] | RecipeData[]>([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=0a417ced9db14541aac8a90a0733616a&number=8",
    )
      .then((response) => response.json())
      .then((recipes) => setData(recipes.recipes));
  }, []);

  return (
    <main>
      <section className="recipe-list">
        {data.map((elements) => (
          <RecipeCard
            key={elements.id}
            title={elements.title}
            image={elements.image}
            cardCart={elements.cardCart}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
