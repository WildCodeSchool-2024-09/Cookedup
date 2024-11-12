import RecetteCard from "../RecetteCard";
import RecettesList from "../RecettesArray";
import "../assets/style/RecetteCard.css";

function Home() {
  return (
    <>
      <section className="recetteListe">
        {RecettesList.map((value) => (
          <RecetteCard key={value.recetteTitle} {...value} />
        ))}
      </section>
    </>
  );
}

export default Home;
