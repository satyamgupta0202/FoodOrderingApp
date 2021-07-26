import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartcontext = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromHandler,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
