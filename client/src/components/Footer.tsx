import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Footer.css";

function Footer() {
  const location = useLocation();
  const urlLocation = location.pathname;
  const splitLocation = urlLocation.split("/");
  return (
    <footer
      className={`footer-container ${splitLocation[1] === "Recipe" || splitLocation[1] === "404_not_found" ? "visible" : ""}`}
    >
      <Link to="/404_not_found">Copyright</Link>

      <Link to="/404_not_found">Mentions légales</Link>

      <Link to="/404_not_found">Conditions générales</Link>
    </footer>
  );
}
export default Footer;
