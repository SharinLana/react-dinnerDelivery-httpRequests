import React, { useRef } from "react";
import Input from "../UI/Input";
import classes from "./ListItemForm.module.css";

const ListItemForm = ({ onAddMeal }) => {
  const inputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = Number(inputRef.current.value);
    onAddMeal(enteredAmount);
    inputRef.current.value = "0";
  };

  return (
    <form className={classes.formContainer} onSubmit={formSubmitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: Math.floor(Math.random() * Date.now()).toString(),
          type: "number",
          placeholder: "0",
          min: 1,
          step: 1,
        }}
      />
      <button className={classes.formBtn} type="submit">
        Add
      </button>
    </form>
  );
};

export default ListItemForm;
