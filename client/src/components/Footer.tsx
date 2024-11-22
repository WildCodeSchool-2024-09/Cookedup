import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer-container">
        <Link to="/Copyright">Copyright</Link>

        <Link to="/mentions-legales">Mentions légales</Link>

        <Link to="/conditions-generales">Conditions générales</Link>
      </section>
    </footer>
  );
}
export default Footer;
