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
  const [newFetch, setNewFetch] = useState<string>(
    `https://api.spoonacular.com/recipes/random?apiKey=${MyApiKey}&number=10`,
  );

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(newFetch);
        const data = await response.json();

        if (newFetch.includes("complexSearch")) {
          setRecipes(data.results);
        } else {
          setRecipes(data.recipes);
        }
      } catch (error) {}
    };

    fetchRecipes();
  }, [newFetch]);
  return (
    <>
      <FormWithButton setNewFetch={setNewFetch} newFetch={newFetch} />
      <main className="main-home">
        <ScrollToTop />
        <Aside imgSrc="public/images/CookedUpLogo.webp" />
        <section className="recipe-list">
          {recipes ? (
            recipes.length > 0 ? (
              recipes.map((element) => (
                <RecipeCard
                  key={element.id}
                  id={element.id}
                  title={element.title}
                  image={element.image}
                />
              ))
            ) : (
              <p>Aucune recette trouvée.</p>
            )
          ) : (
            <p>Chargement...</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Home;
