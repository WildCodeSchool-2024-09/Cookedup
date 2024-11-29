import RecipeCard from "../components/RecipeCard";
import "../assets/styles/HomePage.css";
import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import FormWithButton from "../components/US01-Overlay-Form";
import type { RecipeData } from "../types/Home";
import "../assets/styles/Footer.css";
import "../assets/styles/Header.css";
import Favorites from "../components/Favorites";
import ShoppingList from "../components/ShoppingList";

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
      <ShoppingList />
      <Favorites />
      <FormWithButton setNewFetch={setNewFetch} newFetch={newFetch} />
      <main className="main-home">
        <section className="recipe-list">
          {recipes ? (
            recipes.length > 0 ? (
              recipes.map((element) => (
                <RecipeCard key={element.id} recipe={element} />
              ))
            ) : (
              <p>Aucune recette trouvée.</p>
            )
          ) : (
            <p>Chargement...</p>
          )}
        </section>
        <ScrollToTop />
      </main>
    </>
  );
}

export default Home;
