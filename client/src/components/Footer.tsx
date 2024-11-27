import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Footer.css";

function Footer() {
  const location = useLocation();
  const urlLocation = location.pathname;
  const splitLocation = urlLocation.split("/");
  return (
    <footer
      className={`footer-container ${splitLocation[1] === "Recipe" ? "visible" : ""}`}
    >
      <Link to="/Copyright">Copyright</Link>

      <Link to="/mentions-legales">Mentions légales</Link>

      <Link to="/conditions-generales">Conditions générales</Link>
    </footer>
  );
}
export default Footer;
