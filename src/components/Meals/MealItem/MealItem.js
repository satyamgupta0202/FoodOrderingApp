import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";

const MealItem = (props) => {
  let price = `$${props.price}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h1>{props.name}</h1>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
