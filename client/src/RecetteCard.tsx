interface RecetteCardId {
  imgSrc: string;
  recetteTitle: string;
  cardStars: string;
  cardHeart: string;
}

function RecetteCard({
  imgSrc,
  recetteTitle,
  cardStars,
  cardHeart,
}: RecetteCardId) {
  return (
    <>
      <section>
        <figure>{imgSrc}</figure>
        <h3>{recetteTitle}</h3>
        <p>{cardStars}</p>
        <p>{cardHeart}</p>
      </section>
    </>
  );
}

export default RecetteCard;
