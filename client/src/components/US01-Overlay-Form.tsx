import { useState } from "react";

function FormWithButton() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Formulaire soumis !");
  };

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        Ouvrir le formulaire
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <p>envie d'une recette particulière ?</p>
            <label htmlFor="username"> </label>
            <input
              placeholder="Tapez le nom de votre recette :"
              type="text"
              id="username"
              name="username"
            />
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
          <button type="submit">Envoyer</button>
        </form>
      )}
      <div>
        <button type="button" onClick={handleSubmit}>
          Ouvrir le formulaire
        </button>
        <button type="button" onClick={handleSubmit}>
          Ouvrir le formulaire
        </button>
      </div>
    </div>
  );
}

export default FormWithButton;
