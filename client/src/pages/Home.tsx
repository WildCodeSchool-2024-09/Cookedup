import RecipeCard from "../components/RecipeCard";
import "../assets/styles/HomePage.css";
import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import ScrollToTop from "../components/ScrollToTop";
import FormWithButton from "../components/US01-Overlay-Form";
import type { RecipeData } from "../types/Home";
import "../assets/styles/Footer.css";
import "../assets/styles/Header.css";

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
      <main className="main-home">
        <ScrollToTop />
        <Aside imgSrc="public/images/CookedUpLogo.webp" />
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
