import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.container}>
      <label className={classes.amount} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        ref={ref}
        className={classes.input}
        id={props.input.id}
        {...props.input}
      />
    </div>
  );
});

export default Input;
