import "./assets/style/RecetteCard.css";

interface RecetteCardId {
  imgSrc: string;
  recetteTitle: string;
  cardStars: string;
  cardHeart: string;
  cardCart: string;
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
      <section className="recetteCard">
        <img src={imgSrc} alt={"Food representing the recipe"} />
        <h3>{recetteTitle}</h3>
        <img src={cardStars} alt={"Recipe difficulty"} className="starImg" />
        <button type={undefined}>{cardHeart}</button>
        <button type={undefined}>{cardCart}</button>
      </section>
    </>
  );
}

export default RecetteCard;
