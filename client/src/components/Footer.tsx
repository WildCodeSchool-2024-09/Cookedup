import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
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
      </div>
    </footer>
  );
}
export default Footer;
