import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import RecipeCard from "../components/RecipeCard";
import type { RecipeData } from "../types/Home";
import "../assets/style/HomePage.css";

function Home() {
  const [data, setData] = useState<[] | RecipeData[]>([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=0a417ced9db14541aac8a90a0733616a&number=10",
    )
      .then((response) => response.json())
      .then((recipes) => setData(recipes.recipes));
  }, []);

  return (
    <main>
      <Aside />
      <section className="recipe-list">
        {data.map((elements) => (
          <RecipeCard
            key={elements.id}
            title={elements.title}
            image={elements.image}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
