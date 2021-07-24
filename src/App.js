import Header from "./components/Layout/header";
import React, { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCardHandler = (props) => {
    setcartIsShown(true);
  };
  const hideCardHandler = (props) => {
    setcartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
