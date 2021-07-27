import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) return;
    setbtnIsHighlighted(true);
    //wr also need to remove the class of button each time

    const timer = setTimeout(() => {
      setbtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  //Animation given to cart button when changes occur in cart
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : " "
  }`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
