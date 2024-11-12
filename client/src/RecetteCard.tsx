import "./assets/style/RecetteCard.css";

interface RecetteCardId {
  imgSrc: string;
  recetteTitle: string;
  cardStars: string;
  cardHeart: string;
  cardCart: string;
  // addFavorite: (arg0: string) => void;
}

function RecetteCard({
  imgSrc,
  recetteTitle,
  cardStars,
  cardHeart,
  cardCart,
}: RecetteCardId) {
  return (
    <>
      <section className="recipeCard">
        <img
          src={imgSrc}
          alt={"Food representing the recipe"}
          className="food-img"
        />
        <h3>{recetteTitle}</h3>
        <img src={cardStars} alt={"Recipe difficulty"} className="star-img" />
        <button type="button">{cardHeart}</button>
        <button type="button">{cardCart}</button>
      </section>
    </>
  );
}

export default RecetteCard;
