import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import Checkout from "./checkout";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  let CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          price={items.price}
          amount={items.amount}
          onAdd={cartItemAddHandler.bind(null, items)}
          onRemove={cartItemRemoveHandler.bind(null, items.id)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItem && (
        <button className={classes.button} onClick={orderHandler}>
          order
        </button>
      )}
    </div>
  );

  const submitOrderHandler = (userData) => {
    fetch("https://food-dilevery-cc05d-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items,
      }),
    });
    cartCtx.clearCart();
  };

  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amounts</span>
        <span> {totalAmount}</span>
      </div>

      {isCheckout && (
        <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};
export default Cart;
