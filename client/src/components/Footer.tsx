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
      <ul className="footer-box">
        <li className="link-footer">
          <Link to="/Copyright">Copyright</Link>
        </li>
        <li className="link-footer">
          <Link to="/mentions-legales">Mentions légales</Link>
        </li>
        <li className="link-footer">
          <Link to="/conditions-generales">Conditions générales</Link>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
