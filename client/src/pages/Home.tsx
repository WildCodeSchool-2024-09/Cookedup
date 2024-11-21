import RecipeCard from "../components/RecipeCard";
import "../assets/styles/HomePage.css";
import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import FormWithButton from "../components/US01-Overlay-Form";
import Header from "../components/Header";
import type { RecipeData } from "../types/Home";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

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
      <main className="main-home">
        <Header />
        <ScrollToTop />
        <FormWithButton />
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
        <Footer />
      </main>
    </>
  );
}

export default Home;
