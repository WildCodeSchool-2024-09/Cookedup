import "../style/HomePage.css";

interface AsideProps {
  imgSrc: string;
}

function Aside({ imgSrc }: AsideProps) {
  return (
    <>
      <header className="main-aside">
        <img className="cookedup-logo" src={imgSrc} alt="Cooked Up logo" />
        <nav className="aside-nav">
          {/* <NavLink to ="" >Connection / Inscription </NavLink>
          <NavLink to="">Mes recettes favorites</NavLink>
          <NavLink to="">Ma shopping liste</NavLink> */}
        </nav>
      </header>
    </>
  );
}

export default Aside;
