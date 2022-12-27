import React from "react";
import Button from "./Button";
import classes from "./Header.module.css";
import foodImage from "../../assets/food-table.jpg";

const Header = ({ onShowModal }) => {
  return (
    <>
      <div className={classes.headerContainer}>
        <h2 className={classes.header}>Dinner Delivery</h2>
        <Button onClick={onShowModal} />
      </div>
      <div className={classes.imageContainer}>
        <img src={foodImage} alt="food" className={classes.image} />
      </div>
    </>
  );
};

export default Header;
