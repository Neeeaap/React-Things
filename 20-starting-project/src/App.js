import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { sendCartData, getCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const cartIsVisible = useSelector((state) => state.visible);
  const cartItems = useSelector((state) => state.items);
  const cartTotal = useSelector((state) => state.totalItems);
  const notification = useSelector((state) => state.notification);
  const cartChanged = useSelector((state) => state.changed);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(getCartData());

      isInitial = false;
      return;
    }

    if (cartChanged) {
      dispatch(sendCartData(cartItems, cartTotal));
    }
  }, [cartItems, cartTotal, dispatch, cartChanged]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
