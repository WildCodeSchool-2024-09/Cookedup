import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import "../assets/styles/US01-Overlay-Form.css";

function FormWithButton() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };
  const handleCloseButton = () => {
    setIsFormVisible(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div>
      <button
        className="openFilterButton"
        type="button"
        onClick={handleButtonClick}
      >
        Ouvrir le formulaire
      </button>
      {isFormVisible && (
        <form className="box-container" onSubmit={handleSubmit}>
          <button
            type="button"
            onClick={handleCloseButton}
            className="p-2 bg-dark smallest-button"
          >
            {" "}
            X
          </button>
          <div>
            {/* form recipe choice  */}
            <p>envie d'une recette particulière ?</p>
            <label htmlFor="username"> </label>
            <input
              placeholder="Tapez le nom de votre recette :"
              type="text"
              id="username"
              name="username"
            />
            {/* form radio button  */}
            <div>
              <h1>mouton</h1>
            </div>
            {/* form ingredients choice  */}
            <div className="item-choice">
              <p>Ingredient n°1</p>
              <label htmlFor="username"> </label>
              <input
                placeholder="carrote"
                type="text"
                id="username"
                name="username"
              />
              <p>Ingredient n°2</p>

              <label htmlFor="username"> </label>
              <input
                placeholder="mouton"
                type="text"
                id="username"
                name="username"
              />
            </div>
          </div>
          {/* form validation and clear button  */}
          <div>
            <button type="button" onClick={handleSubmit}>
              Send
            </button>
            <button type="button" onClick={handleSubmit}>
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default FormWithButton;
