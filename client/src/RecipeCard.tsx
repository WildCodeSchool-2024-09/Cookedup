import "./assets/style/RecetteCard.css";

interface RecetteCardId {
  imgSrc: string;
  recetteTitle: string;
  cardStars: string;
  cardHeart: string;
  cardCart: string;
}

function RecipeCard({
  imgSrc,
  recetteTitle,
  cardStars,
  cardHeart,
  cardCart,
}: RecetteCardId) {
  // const [isFavorite, setIsFavorite] = useState([]);
  // const toggleFavorite = (recipeList) => {
  //   if (isFavorite.includes(recipeList)) {
  //     setIsFavorite(isFavorite.filter(fav => fav !== recipeList));
  //   } else {setIsFavorite([...isFavorite, recipeList]);

  //   }
  // };

  return (
    <>
      <section className="recipe-card">
        <img
          src={imgSrc}
          alt={"Food representing the recipe"}
          className="food-img"
        />
        <h3>{recetteTitle}</h3>
        <img src={cardStars} alt={"Recipe difficulty"} className="star-img" />
        <section className="card-button">
          <button type="button">{cardHeart}</button>
          <button type="button">{cardCart}</button>
        </section>
      </section>
    </>
  );
}

export default RecipeCard;
