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
  // addFavorite,
}: RecetteCardId) {
  return (
    <>
      <section className="recetteCard">
        <img
          src={imgSrc}
          alt={"Food representing the recipe"}
          className="foodImg"
        />
        <h3>{recetteTitle}</h3>
        <img src={cardStars} alt={"Recipe difficulty"} className="starImg" />
        <button type={undefined}>{cardHeart}</button>
        <button type={undefined}>{cardCart}</button>
      </section>
    </>
  );
}

export default RecetteCard;
