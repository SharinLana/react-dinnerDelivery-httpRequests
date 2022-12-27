import React from "react";
import classes from "./Quantity.module.css";

const Quantity = ({ quantity, onAdd, onRemove }) => {
  return (
    <div className={classes.container}>
      <button onClick={onAdd} className={classes.btn}>
        {" "}
        +{" "}
      </button>
      <p className={classes.quantity}>{quantity}</p>
      <button onClick={onRemove} className={classes.btn}>
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Quantity;
