import { use } from "react";

import CartContext from "../store/cartContext";
import UserProgressContext from "../store/userProgressContext";

import Button from "./UI/Button";
import logoImg from "../assets/logo.jpg";

export default function Header() {
  const cartCtx = use(CartContext);
  const userProgressCtx = use(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function showCartHandler() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="ReactFood Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={showCartHandler}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
