import RecipeCard from "../components/RecipeCard";
import "../assets/style/RecetteCard.css";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { RecipeData } from "../types/Home";
import "../assets/styles/Footer.css";
import "../assets/styles/Header.css";

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
      <Header />
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
      <Footer />
    </>
  );
}

export default Home;
