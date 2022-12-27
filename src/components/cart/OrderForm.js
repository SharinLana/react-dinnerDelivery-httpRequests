import React, { useState } from "react";
import useValidate from "../../hooks/useValidate";
import classes from "./OrderForm.module.css";
import UserDataInput from "./UserDataInput";

const OrderForm = ({ onGetValidUserData, isSubmitted, orderPressed }) => {
  let [userInput, setUserInput] = useState({
    name: "",
    email: "",
    address: "",
    zip: "",
  });

  // CUSTOM HOOK useValidate();
  const {
    nameIsValid,
    emailIsValid,
    addressIsValid,
    zipIsValid,
    validateName,
    validateEmail,
    validateAddress,
    validateZipCode,
  } = useValidate(orderPressed, isSubmitted, userInput);

  //   GETTING USER INPUT DATA
  const getUserName = (value) => {
    setUserInput((userInput = { ...userInput, name: value }));
    validateName(value);
  };
  const getUserEmail = (value) => {
    setUserInput((userInput = { ...userInput, email: value }));
    validateEmail(value);
  };
  const getUserAddress = (value) => {
    setUserInput((userInput = { ...userInput, address: value }));
    validateAddress(value);
  };
  const getUserZip = (value) => {
    setUserInput((userInput = { ...userInput, zip: value }));
    validateZipCode(value);
  };

  //   FORM SUBMITTION
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // TO DISPLAY THE ERROR MESSAGE ON THE EMPTY INPUT FIELDS
    validateName(userInput.name);
    validateEmail(userInput.email);
    validateAddress(userInput.address);
    validateZipCode(userInput.zip);

    // THE FORM IS VALID WHEN:
    const validForm =
      nameIsValid &&
      emailIsValid &&
      addressIsValid &&
      zipIsValid &&
      userInput.name.trim() !== "" &&
      userInput.email.trim() !== "" &&
      userInput.address.trim() !== "" &&
      userInput.zip.trim() !== "";

    if (!validForm) {
      return;
    }

    onGetValidUserData({
      name: userInput.name,
      email: userInput.email,
      address: userInput.address,
      zip: userInput.zip,
    });

    // RESETTING INPUTS
    setUserInput({
      name: "",
      email: "",
      address: "",
      zip: "",
    });
  };

  return (
    <form className={classes.formContainer} onSubmit={formSubmitHandler}>
      <UserDataInput
        label="Full name:"
        placeholder="Full Name"
        onGetValue={getUserName}
        input={{ type: "text", id: "fullName", value: userInput.name }}
        nameIsValid={nameIsValid}
        inputValid={nameIsValid}
        invalidName="Please enter your first and last name"
        value={userInput.name}
      />
      <UserDataInput
        label="Email:"
        placeholder="Your email"
        onGetValue={getUserEmail}
        input={{ type: "text", id: "email", value: userInput.email }}
        emailIsValid={emailIsValid}
        inputValid={emailIsValid}
        invalidEmail="Invalid email"
        value={userInput.email}
      />
      <UserDataInput
        label="Shipping address:"
        placeholder="Address"
        onGetValue={getUserAddress}
        input={{ type: "text", id: "address", value: userInput.address }}
        addressIsValid={addressIsValid}
        inputValid={addressIsValid}
        message="Please enter your address"
        value={userInput.address}
      />
      <UserDataInput
        label="ZIP code:"
        placeholder="ZIP"
        onGetValue={getUserZip}
        input={{ type: "text", id: "zipCode", value: userInput.zip }}
        zipIsValid={zipIsValid}
        inputValid={zipIsValid}
        invalidZip="Invalid ZIP code"
        value={userInput.zip}
      />

      <button type="submit" className={classes.subminBtn}>
        Submit
      </button>
    </form>
  );
};

export default OrderForm;
