import { use, useActionState } from "react";
import useHttp from "../hooks/useHttp";

import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Error from "./Error";

import { currencyFormatter } from "../util/format";
import CartContext from "../store/cartContext";
import UserProgressContext from "../store/userProgressContext";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = use(CartContext);
  const userProgressCtx = use(UserProgressContext);

  const { data, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig,
  );

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  function closeHandler() {
    userProgressCtx.hideCheckout();
  }

  function finishHandler() {
    userProgressCtx.hideCheckout();
    userProgressCtx.clearCart();
    clearData();
  }

  async function checkoutAction(prevState, fd) {
    const userData = Object.fromEntries(fd.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: userData,
        },
      }),
    );
  }

  const [formState, formAction, isLoading] = useActionState(
    checkoutAction,
    null,
  );

  let actions = (
    <>
      <Button type="button" textOnly onClick={closeHandler}>
        Close
      </Button>
      <Button>Submit</Button>
    </>
  );

  if (isLoading) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={finishHandler}
      >
        <h2>Success!</h2>
        <p>Your order has been submitted successfully.</p>
        <p className="modal-actions">
          <Button onClick={finishHandler}>Ok</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={closeHandler}
    >
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
