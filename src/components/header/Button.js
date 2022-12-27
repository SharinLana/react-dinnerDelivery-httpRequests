import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../../utils/CartIcon";
import classes from "./Button.module.css";

const Button = ({ onClick }) => {
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const cartCtx = useContext(CartContext);

  // CALCULATING THE NUMBER OF MEALS ADDED TO CART
  const numberOfMeals = cartCtx.meals.reduce(
    (currentMeal, meal) => currentMeal + meal.quantity,
    0
  );

  // BUTTON ANIMATION ON ADDING A NEW ITEM TO CART
  useEffect(() => {
    if (cartCtx.meals.length > 0) {
      setButtonIsActive(true);
    }

    setTimeout(() => {
      setButtonIsActive(false);
    }, 1000);
  }, [cartCtx.meals]);

  const btnStyle = `${classes.btnContainer} ${
    buttonIsActive ? classes.activeBtn : ""
  }`;

  return (
    <div className={btnStyle} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <p className={classes.btnName}>Your Cart:</p>
      <p className={classes.number}>{numberOfMeals}</p>
    </div>
  );
};

export default Button;
