import RecipeCard from "../components/RecipeCard";
import "../assets/styles/HomePage.css";
import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import FormWithButton from "../components/US01-Overlay-Form";
import type { RecipeData } from "../types/Home";
import "../assets/styles/Footer.css";
import "../assets/styles/Header.css";
import Favorites from "../components/Favorites";

function Home() {
  const [recipes, setRecipes] = useState<null | RecipeData[]>(null);
  const MyApiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${MyApiKey}&number=10`,
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <>
      <FormWithButton />
      <Favorites />
      <main className="main-home">
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
        <ScrollToTop />
      </main>
    </>
  );
}

export default Home;
