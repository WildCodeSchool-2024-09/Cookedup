import { Link } from "react-router-dom";
import "../assets/styles/NotFound.css";

function Not_found() {
  return (
    <>
      <section className="not-found-container">
        <h1 className="not-found-title">404 RECIPE NOT FOUND</h1>
        <Link to={"/"}>
          <div className="plate-out">
            <div className="plate-in"> </div>
          </div>
        </Link>
        <p className="return-instructions">
          But you can return to home if you hit this plate...
        </p>
        <img
          src="fork-and-knife.png"
          alt="fork and knife"
          className="img-not-found"
        />
      </section>
    </>
  );
}

export default Not_found;
