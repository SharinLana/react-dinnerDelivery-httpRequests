import React from "react";
import classes from "./CartItem.module.css";
import Quantity from "./Quantity";

const CartItem = ({ meal, onAdd, onRemove, key }) => {
  const subtotal = meal.price * meal.quantity;
  return (
    <div className={classes.container} key={key}>
      <p className={classes.name}>{meal.name}</p>
      <p className={classes.price}>$ {meal.price}</p>
      <Quantity quantity={meal.quantity} onAdd={onAdd} onRemove={onRemove} />
      <p className={classes.subtotal}>$ {subtotal.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
