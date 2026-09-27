import { use } from "react";
import { currencyFormatter } from "../util/format";

import Button from "./UI/Button";
import CartContext from "../store/cartContext";

export default function MealItem({ mealData }) {
  const cartCtx = use(CartContext);

  function addToCartHandler() {
    cartCtx.addItem(mealData);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${mealData.image}`}
          alt={mealData.name}
        />
        <div>
          <h3>{mealData.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(mealData.price)}
          </p>
          <p className="meal-item-description">{mealData.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
