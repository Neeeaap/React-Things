import { cartActions } from "./cart";

export const getCartData = () => {
  return async function (dispatch) {
    async function fetchData() {
      const response = await fetch(
        "https://react-a4d8d-default-rtdb.asia-southeast1.firebasedatabase.app/.json",
      );
      if (!response.ok) throw new Error("Could not fetch cart data.");

      const data = await response.json();
      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalItems: cartData.totalItems || 0,
        }),
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        }),
      );
    }
  };
};

export const sendCartData = (cartItems, cartTotal) => {
  const cartData = {
    items: cartItems,
    totalItems: cartTotal,
  };

  return async function (dispatch) {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      }),
    );

    async function sendRequest() {
      const response = await fetch(
        "https://react-a4d8d-default-rtdb.asia-southeast1.firebasedatabase.app/.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        },
      );

      if (!response.ok) throw new Error("Sending cart data failed.");
    }

    try {
      await sendRequest();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        }),
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        }),
      );
    }
  };
};
