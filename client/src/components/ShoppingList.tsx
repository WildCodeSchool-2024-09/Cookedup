import { useCallback, useState } from "react";
import type { Ingredient } from "../types/Home";
import "../assets/styles/ShoppingList.css";
function ShoppingList() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [showList, setShowList] = useState(false);

  const loadIngredients = useCallback(() => {
    const storedIngredients = JSON.parse(
      localStorage.getItem("ingredientsList") || "[]",
    );
    setIngredients(storedIngredients);
  }, []);

  const handleShowList = () => {
    loadIngredients();
    setShowList(true);
  };

  const handleClear = () => {
    localStorage.removeItem("ingredientsList");
    setIngredients([]);
    setShowList(false);
  };

  const handleCloseList = () => {
    setShowList(false);
  };

  return (
    <div className="global-container">
      <button
        className="open-filter-buttons"
        type="button"
        onClick={handleShowList}
      >
        🛒
      </button>

      <button
        type="button"
        className={`overlay-background ${showList ? "active" : ""}`}
        onClick={handleCloseList}
      />

      {showList && (
        <div className="box-container-list">
          <div className="list-ingredients ">
            <h1 className="centered">Shopping List</h1>
            <ul className="list-container ">
              {ingredients.map((ingredient) => (
                <li key={ingredient.title}>
                  <span className="ingredient-title">{ingredient.title}</span> :{" "}
                  {ingredient.quantity} {ingredient.unit}{" "}
                </li>
              ))}
            </ul>
            <button className="bot-button" type="button" onClick={handleClear}>
              Clear List
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
