import "../assets/styles/HomePage.css";

interface AsideProps {
  imgSrc: string;
}

function Aside({ imgSrc }: AsideProps) {
  return (
    <>
      <header className="main-aside">
        <img className="cookedup-logo" src={imgSrc} alt="Cooked Up logo" />
        <nav className="aside-nav">
          <ul>
            <li>Connection / Inscription</li>
            <li>Mes recettes favorites</li>
            <li>Ma shopping liste</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Aside;