const recipeList = [
  {
    imgSrc: "/src/assets/images/ramen.jpg",
    recetteTitle: "Ramen",
    cardStars: "/src/assets/images/BlackStar.png",
    cardHeart: "🧡",
    cardCart: "🛒",
  },

  {
    imgSrc: "/src/assets/images/salade.jpg",
    recetteTitle: "Salade nicoise",
    cardStars: "/src/assets/images/BlackStar.png",
    cardHeart: "🧡",
    cardCart: "🛒",
  },

  {
    imgSrc: "/src/assets/images/pouletYassa.jpg",
    recetteTitle: "Poulet Yassa",
    cardStars: "/src/assets/images/BlackStar.png",
    cardHeart: "🧡",
    cardCart: "🛒",
  },

  {
    imgSrc: "/src/assets/images/lasagnevege.jpg",
    recetteTitle: "Lasagne vege",
    cardStars: "/src/assets/images/BlackStar.png",
    cardHeart: "🧡",
    cardCart: "🛒",
  },
];

// interface RecetteCardId {
//   imgSrc: string;
//   recetteTitle: string;
//   cardStars: string;
//   cardHeart: string;
//   cardCart: string;
// }

// const [isFavorite, setIsFavorite] = useState([]);
// const toggleFavorite = (recipeList) => {
//   if (isFavorite.includes(recipeList)) {
//     setIsFavorite(isFavorite.filter(fav => fav !== recipeList));
//   } else {setIsFavorite([...isFavorite, recipeList]);

//   }
// };

/* <img src={cardStars} alt={"Recipe difficulty"} className="star-img" /> 
<section className="card-button">
<button type="button">{cardHeart}</button>
<button type="button">{cardCart}</button>
</section>  */

export default recipeList;
