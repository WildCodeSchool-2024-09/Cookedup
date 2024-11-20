import "../assets/styles/header.css";
function Header() {
  return (
    <header className="header-container">
      <figure id="home-container">
        <img id="home" src="/src/assets/image/image-temp.webp" alt="cuisine" />
        <img
          id="left-flower"
          src="/src/assets/image/Pngtreeivy_vines_926036.webp"
          alt="Fleur située à gauche"
        />
        <img
          id="right-flower"
          src="/src/assets/image/vine-computer-icons-clip-art-ivy-53f2b07d5459bc3cc8cd0ee5dda0630a.webp"
          alt="Fleur située à droite"
        />
      </figure>
      <div className="header-end">
        <p className="presentation">
          Bienvenue chez Cooked-Up ! Ici, cuisiner devient facile et amusant. Si
          une recette te plaît, clique sur le cœur pour l’ajouter à tes favoris.
          Prêt(e) à cuisiner ? Ajoute ta recette à ta liste de courses !
        </p>
        <figure>
          <img
            id="logo"
            src="/src/assets/image/CookedUpLogo_2.webp"
            alt="Logo de l'application"
          />
        </figure>
      </div>
    </header>
  );
}
export default Header;
