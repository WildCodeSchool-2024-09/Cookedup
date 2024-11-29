import { useLocation } from "react-router-dom";
import "../assets/styles/header.css";

function Header() {
  const location = useLocation();
  const urlLocation = location.pathname;
  const splitLocation = urlLocation.split("/");
  return (
    <header
      className={`header-container ${splitLocation[1] === "Recipe" ? "visible" : ""}`}
    >
      <section className="kitchen-photo">
        <img
          className="kitchen"
          src="/image-temp.jpg"
          alt="Home page kitchen header"
        />
      </section>
      <section className="header-end">
        <p className="presentation">
          Bienvenue chez Cooked-Up ! Ici, cuisiner devient facile et amusant. Si
          une recette te plaît, clique sur le cœur pour l’ajouter à tes favoris.
          Prêt(e) à cuisiner ? Ajoute la recette à ta shopping liste !
        </p>
      </section>
      <section className="logo-section">
        <img
          className="logo"
          src="/public/images/CookedUpLogo.webp"
          alt="Logo de l'application"
        />
      </section>
    </header>
  );
}
export default Header;
