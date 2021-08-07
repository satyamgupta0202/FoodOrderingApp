import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0, //total Amount refers to price
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //total amout in the cart updation
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //check if item is already there
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingItem) {
      //no itim is externally added onlu amount of the items changes
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items]; //previous state enhanced
      updatedItems[existingCartItemIndex] = updatedItem; //
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
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
  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };
  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
