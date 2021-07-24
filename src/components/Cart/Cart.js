import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  let CartItems = (
    <ul className={classes["cart-items"]}>
      {[
        { id: "c1", name: "satyam", amount: 2, quantity: 10, price: 12.99 },
      ].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amounts</span>
        <span> 35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};
export default Cart;
