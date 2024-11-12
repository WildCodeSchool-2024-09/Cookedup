import RecetteCard from "./RecetteCard";
import RecettesList from "./RecettesArray";
import "./assets/style/RecetteCard.css";

function App() {
  // utliser deux useState : un "Favoris" et un "Panier"
  // const [isFavoris, setIsFavoris] = useState([]);

  // useEffect(() => {
  //   console.log("I'm trying to understand useEffect")
  // },[])

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

/* <RecetteCard 
imgSrc={RecettesList[0].imgSrc} 
recetteTitle={RecettesList[0].recetteTitle} 
cardStars={RecettesList[0].cardStars} 
cardHeart={RecettesList[0].cardHeart}/> */

export default App;
