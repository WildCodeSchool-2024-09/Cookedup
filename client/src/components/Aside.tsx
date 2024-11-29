import { useLocation } from "react-router-dom";
import "../assets/styles/Aside.css";

interface AsideProps {
  imgSrc: string;
}

function Aside({ imgSrc }: AsideProps) {
  const location = useLocation();
  const urlLocation = location.pathname;
  const splitLocation = urlLocation.split("/");

  return (
    <>
      <section
        className={`main-aside ${splitLocation[1] === "Recipe" || splitLocation[1] === "404_not_found" ? "visible" : ""}`}
      >
        <img className="cookedup-logo" src={imgSrc} alt="Cooked Up logo" />
        <nav className="aside-nav">
          <ul>
            <li>Connection / Inscription</li>
            <li>Mes recettes favorites</li>
            <li>Ma shopping liste</li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Aside;
