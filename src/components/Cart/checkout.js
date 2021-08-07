import classes from "./checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (val) => val.trim() === "";
const isFiveChar = (val) => val.trim().length === 5;

const Checkout = (props) => {
  const [validity, setValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameInput.current.value;
    const street = streetInput.current.value;
    const postal = postalInput.current.value;
    const city = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(name);
    const enteredCityIsValid = !isEmpty(city);
    const enteredStreetIsValid = !isEmpty(street);
    const enteredPostalIsValid = isFiveChar(postal);

    setValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formISValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;

    if (!formISValid) {
      return;
    }

    console.log(name, street, postal, city);
  };

  const nameInvalidClass = `${classes.control} ${
    validity.name ? " " : classes.invalid
  }`;
  const streetInvalidClass = `${classes.control} ${
    validity.street ? " " : classes.invalid
  }`;

  const cityInvalidClass = `${classes.control} ${
    validity.city ? " " : classes.invalid
  }`;

  const postalInvalidClass = `${classes.control} ${
    validity.postal ? " " : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInvalidClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!validity.name && <p>name is Invalid</p>}
      </div>

      <div className={streetInvalidClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!validity.street && <p>street is Invalid</p>}
      </div>

      <div className={postalInvalidClass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInput} />
        {!validity.postal && <p>Postalcode is Invalid</p>}
      </div>

      <div className={cityInvalidClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!validity.city && <p>City is Invalid</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
