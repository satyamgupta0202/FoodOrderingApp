import CartContext from "./cart-context";
import React from "react";
const addItemToCartHandler = (items) => {};
const removeItemFromHandler = (id) => {};
const CartProvider = (props) => {
  const cartcontext = {
    items: [],
    amount: 0,
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
