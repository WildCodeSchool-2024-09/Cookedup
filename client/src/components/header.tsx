import "../assets/styles/header.css";

function Header() {
  return (
    <div>
      <figure id="home">
        <img src="/src/assets/image/image-temp.webp" alt="" />
      </figure>
      <figure id="left-flower">
        <img src="/src/assets/image/Pngtreeivy_vines_926036.webp" alt="" />
      </figure>
      <figure id="right-flower">
        <img
          src="/src/assets/image/vine-computer-icons-clip-art-ivy-53f2b07d5459bc3cc8cd0ee5dda0630a.webp"
          alt=""
        />
      </figure>
      <p>
        Bienvenue chez Cooked-Up !Ici, cuisiner devient facile et amusant.Si une
        recette te plaît, clique sur le cœur pour l’ajouter à tes favoris.
        Prêt(e) à cuisiner ? Ajoute ta recette à ta liste de courses !
      </p>
      <figure id="logo">
        <img src="/src/assets/image/CookedUpLogo_2.webp" alt="" />
      </figure>
    </div>
  );
}

export default Header;
