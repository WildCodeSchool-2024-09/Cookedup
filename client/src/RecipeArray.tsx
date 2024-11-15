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
// const toggleFavorite = (RecipeData) => {
//   if (isFavorite.includes(RecipeData)) {
//     setIsFavorite(isFavorite.filter(fav => fav !== RecipeData));
//   } else {setIsFavorite([...isFavorite, RecipeData]);

//   }
// };

/* <img src={cardStars} alt={"Recipe difficulty"} className="star-img" /> 
<section className="card-button">
<button type="button">{cardHeart}</button>
<button type="button">{cardCart}</button>
</section>  */

export default recipeList;
