import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.amount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {};
  const cartItemRemoveHandler = (id) => {};
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
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amounts</span>
        <span> {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
