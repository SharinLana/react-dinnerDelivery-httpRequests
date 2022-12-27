import { useState } from "react";

const useValidate = (orderPressed, isSubmitted) => {
  const [nameIsValid, setNameIsValid] = useState(
    orderPressed && !isSubmitted ? true : false
  );
  const [emailIsValid, setEmailIsValid] = useState(
    orderPressed && !isSubmitted ? true : false
  );
  const [addressIsValid, setAddressIsValid] = useState(
    orderPressed && !isSubmitted ? true : false
  );
  const [zipIsValid, setZipIsValid] = useState(
    orderPressed && !isSubmitted ? true : false
  );

  //   FULL NAME VALIDATION
  const validateName = (value) => {
    const nameArr = value.split(" ");
    nameArr.length > 1 ? setNameIsValid(true) : setNameIsValid(false);

    if (value.trim() === "" || nameArr[1] === "") {
      setNameIsValid(false);
    }
  };

  //   EMAIL VALIDATION
  const validateEmail = (value) => {
    const expression =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.trim().match(expression)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  // ADDRESS VALIDATION
  const validateAddress = (value) => {
    value.trim() === "" ? setAddressIsValid(false) : setAddressIsValid(true);
  };

  //   ZIP CODE VALIDATION
  const validateZipCode = (value) => {
    if (isNaN(value.trim()) || value.trim().length !== 5) {
      setZipIsValid(false);
    } else {
      setZipIsValid(true);
    }
  };

  return {
    nameIsValid,
    emailIsValid,
    addressIsValid,
    zipIsValid,
    validateName,
    validateEmail,
    validateAddress,
    validateZipCode,
  };
};

export default useValidate;
