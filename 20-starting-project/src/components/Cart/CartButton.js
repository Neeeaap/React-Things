import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";

import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const totalItems = useSelector((state) => state.totalItems);
  const dispatch = useDispatch();

  function toggleCartHandler() {
    dispatch(cartActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
