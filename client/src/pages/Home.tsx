import RecettesList from "../RecettesArray";
import RecetteCard from "../components/RecetteCard";
import "../assets/style/RecetteCard.css";

function Home() {
  return (
    <>
      <section className="recipe-list">
        {RecettesList.map((value) => (
          <RecetteCard key={value.recetteTitle} {...value} />
        ))}
      </section>
    </>
  );
}

export default Home;
