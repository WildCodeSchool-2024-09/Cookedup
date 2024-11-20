import "../style/HomePage.css";

interface AsideId {
  imgSrc: string;
}

function Aside({ imgSrc }: AsideId) {
  return (
    <>
      <header className="main-aside">
        <img className="cookedup-logo" src={imgSrc} alt="Cooked Up logo" />
        <nav className="aside-nav">
          <li>Connection / Inscription</li>
          <li>Mes recettes favorites</li>
          <li>Ma shopping liste</li>
        </nav>
      </header>
    </>
  );
}

export default Aside;
