import recipeList from "../RecipeArray";
import RecipeCard from "../RecipeCard";
import "../assets/style/RecetteCard.css";

function Home() {
  return (
    <>
      <section className="recipe-list">
        {recipeList.map((value) => (
          <RecipeCard key={value.recetteTitle} {...value} />
        ))}
      </section>
    </>
  );
}

export default Home;
