import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Footer.css";

function Footer() {
  const location = useLocation();
  const urlLocation = location.pathname;
  const splitLocation = urlLocation.split("/");
  return (
    <footer>
      <section
        className={`footer-container ${splitLocation[1] === "recipe" ? "visible" : ""}`}
      >
        <Link to="/Copyright">Copyright</Link>

        <Link to="/mentions-legales">Mentions légales</Link>

        <Link to="/conditions-generales">Conditions générales</Link>
      </section>
    </footer>
  );
}
export default Footer;
