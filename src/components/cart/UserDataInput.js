import React from "react";
import classes from "./UserDataInput.module.css";

const UserDataInput = (props) => {
  // GETTING USER INPUT DATA
  const getInputValue = (e) => {
    props.onGetValue(e.target.value);
  };

  // INVALID INPUT WARNINGS
  const invalidNameWarning = (
    <span className={classes.warning} style={{ color: "#ac4425" }}>
      {" "}
      {!props.nameIsValid ? props.invalidName : ""}
    </span>
  );
  const invalidEmailWarning = (
    <span className={classes.warning} style={{ color: "#ac4425" }}>
      {" "}
      {!props.emailIsValid ? props.invalidEmail : ""}
    </span>
  );
  const invalidAddressWarning = (
    <span className={classes.warning} style={{ color: "#ac4425" }}>
      {" "}
      {!props.addressIsValid ? props.message : ""}
    </span>
  );
  const invalidZipWarning = (
    <span className={classes.warning} style={{ color: "#ac4425" }}>
      {" "}
      {!props.zipIsValid ? props.invalidZip : ""}
    </span>
  );

  return (
    <div className={classes.inputContainer}>
      <label htmlFor={props.input.id} className={classes.label}>
        {props.label}

        {invalidNameWarning}
        {invalidEmailWarning}
        {invalidAddressWarning}
        {invalidZipWarning}
      </label>

      <input
        type={props.input.type}
        id={props.input.id}
        placeholder={props.placeholder}
        className={`${classes.input} ${
          props.inputValid ? classes.input : classes.invalid
        }`}
        onChange={getInputValue}
        value={props.input.value}
      />
    </div>
  );
};

export default UserDataInput;
