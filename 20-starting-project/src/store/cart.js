import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalItems: 0,
  visible: true,
  notification: null,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name,
      );

      state.totalItems++;
      state.changed = true;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          total: newItem.price,
          id: newItem.name,
        });
      }
    },

    removeItem(state, action) {
      const itemName = action.payload;
      const existingItem = state.items.find((item) => item.name === itemName);

      state.totalItems--;
      state.changed = true;

      if (existingItem) {
        existingItem.quantity--;
        existingItem.total = existingItem.quantity * existingItem.price;

        if (existingItem.quantity <= 0) {
          state.items = state.items.filter((item) => item.name !== itemName);
        }
      }
    },

    toggleCart(state) {
      state.visible = !state.visible;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },

    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
    },
  },
});

const cartStore = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default cartStore;
