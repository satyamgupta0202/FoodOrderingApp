import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: () => {},
  removeItem: (id) => {},
});
export default CartContext;
