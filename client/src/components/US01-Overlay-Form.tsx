import { useState } from "react";
import type { FormWithButtonProps } from "../types/Home";
import "../assets/styles/US01-Overlay-Form.css";
import ingredient from "./IngredientArray";
function FormWithButton({ setNewFetch }: FormWithButtonProps) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [recipeChoice, setRecipeChoice] = useState<string>("");
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const [includedIngredients, setIncludedIngredients] = useState<string[]>([]);
  const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);
  const [valueInclude, setValueInclude] = useState("");
  const [valueExclude, setValueExclude] = useState("");
  const [activeIndexInclude, setActiveIndexInclude] = useState(-1);
  const [activeIndexExclude, setActiveIndexExclude] = useState(-1);
  const MyApiKey = import.meta.env.VITE_API_KEY;

  // Afficher/masquer le formulaire
  const handleButtonClick = () => setIsFormVisible(!isFormVisible);

  // Fonction pour gérer le changement de texte dans les inputs
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "include" | "exclude",
  ) => {
    if (type === "include") {
      setValueInclude(event.target.value);
      setActiveIndexInclude(-1);
    } else {
      setValueExclude(event.target.value);
      setActiveIndexExclude(-1);
    }
  };

  // Fonction pour la navigation par touches
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    type: "include" | "exclude",
  ) => {
    const value = type === "include" ? valueInclude : valueExclude;
    const activeIndex =
      type === "include" ? activeIndexInclude : activeIndexExclude;
    const setActiveIndex =
      type === "include" ? setActiveIndexInclude : setActiveIndexExclude;
    const handleSelect =
      type === "include" ? handleSelectInclude : handleSelectExclude;

    const filteredSuggestions = ingredient.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );

    if (event.key === "ArrowDown") {
      setActiveIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (event.key === "ArrowUp") {
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex,
      );
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      handleSelect(filteredSuggestions[activeIndex]);
    }
  };

  // Sélectionner un ingrédient inclus
  const handleSelectInclude = (ingredient: string) => {
    setIncludedIngredients([...includedIngredients, ingredient]);
    setValueInclude("");
    setActiveIndexInclude(-1);
  };

  // Sélectionner un ingrédient exclu
  const handleSelectExclude = (ingredient: string) => {
    setExcludedIngredients([...excludedIngredients, ingredient]);
    setValueExclude("");
    setActiveIndexExclude(-1);
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validExcludedIngredients = excludedIngredients.filter(
      (ingredient) => ingredient.trim() !== "",
    );
    const newFetched = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(recipeChoice)}&apiKey=${MyApiKey}&diet=${encodeURIComponent(dietaryFilters.join(", "))}&includeIngredients=${encodeURIComponent(includedIngredients.join(", "))}&excludeIngredients=${encodeURIComponent(validExcludedIngredients.join(", "))}&number=30`;
    setNewFetch(newFetched);
  };

  // Réinitialiser le formulaire
  const handleClear = () => {
    setNewFetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${MyApiKey}&number=10`,
    );
    setRecipeChoice("");
    setDietaryFilters([]);
    setIncludedIngredients([]);
    setExcludedIngredients([]);
    setValueInclude("");
    setValueExclude("");
    setActiveIndexInclude(-1);
    setActiveIndexExclude(-1);
  };

  return (
    <div className="form-with-button">
      <button
        className="open-filter-button"
        type="button"
        onClick={handleButtonClick}
      >
        ☰
      </button>

      {isFormVisible && (
        <>
          <button
            type="button"
            className="overlay-background active"
            onClick={handleButtonClick}
          />
          <form className="box-container" onSubmit={handleSubmit}>
            <p className="text-style-center">
              Envie d'une recette particulière ?
            </p>
            <input
              className="prettier-box-form"
              type="text"
              placeholder="Nom de la recette"
              value={recipeChoice}
              onChange={(e) => setRecipeChoice(e.target.value)}
            />
            <p className="text-style">Filtres diététiques :</p>

            <div className="diet-filter-container">
              {["Gluten Free", "Vegetarian", "Vegan"].map((filter) => (
                <label className="diet-filter" key={filter}>
                  <input
                    className="checkbox-cursor"
                    type="checkbox"
                    value={filter}
                    checked={dietaryFilters.includes(filter)}
                    onChange={(e) =>
                      setDietaryFilters((prevFilters) =>
                        prevFilters.includes(e.target.value)
                          ? prevFilters.filter((f) => f !== e.target.value)
                          : [...prevFilters, e.target.value],
                      )
                    }
                  />
                  {filter}
                </label>
              ))}
            </div>

            <div>
              <p className="text-style">Ajouter des ingrédients :</p>
              <input
                className="prettier-box-form"
                type="text"
                placeholder="Ingrédient à inclure"
                value={valueInclude}
                onChange={(e) => handleInputChange(e, "include")}
                onKeyDown={(e) => handleKeyDown(e, "include")}
              />
              {valueInclude && (
                <ul className="autocomplete-list">
                  {ingredient
                    .filter((item) =>
                      item.toLowerCase().startsWith(valueInclude.toLowerCase()),
                    )
                    .map((item, index) => (
                      <li
                        key={item}
                        onClick={() => handleSelectInclude(item)}
                        onMouseEnter={() => setActiveIndexInclude(index)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            handleSelectInclude(item);
                          }
                        }}
                        className={
                          index === activeIndexInclude
                            ? "autocomplete-item active"
                            : "autocomplete-item"
                        }
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              )}
              {includedIngredients.length > 0 && (
                <p className="choice-list-selection">
                  Ingrédients ajoutés : {includedIngredients.join(", ")}
                </p>
              )}
            </div>

            <div>
              <p className="text-style">Exclure des ingrédients :</p>
              <input
                className="prettier-box-form"
                type="text"
                placeholder="Ingrédient à exclure"
                value={valueExclude}
                onChange={(e) => handleInputChange(e, "exclude")}
                onKeyDown={(e) => handleKeyDown(e, "exclude")}
              />
              {valueExclude && (
                <ul className="autocomplete-list">
                  {ingredient
                    .filter((item) =>
                      item.toLowerCase().startsWith(valueExclude.toLowerCase()),
                    )
                    .map((item, index) => (
                      <li
                        key={item}
                        onClick={() => handleSelectExclude(item)}
                        onMouseEnter={() => setActiveIndexExclude(index)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            handleSelectExclude(item);
                          }
                        }}
                        className={
                          index === activeIndexExclude
                            ? "autocomplete-item active"
                            : "autocomplete-item"
                        }
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              )}
              {excludedIngredients.length > 0 && (
                <p className="choice-list-selection">
                  Ingrédients exclus : {excludedIngredients.join(", ")}
                </p>
              )}
            </div>
            <div className="bot-button-containner">
              <button className="bot-button" type="submit">
                Envoyer
              </button>
              <button
                className="bot-button"
                type="button"
                onClick={handleClear}
              >
                Réinitialiser
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default FormWithButton;
