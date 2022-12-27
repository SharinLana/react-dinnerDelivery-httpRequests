import React from "react";
import classes from "./Summary.module.css";

const Summary = () => {
  return (
    <div className={classes.summaryContainer}>
      <h3 className={classes.summaryHeader}>
        Perfectly Balanced Meals, Delivered To You
      </h3>
      <p className={classes.summaryText}>
        We never deliver cold food! Our fully cooked meals are always at the
        perfect ready-to eat temperature.{" "}
      </p>
      <p className={classes.summaryText}>
        Choose a meal from the today's menu and enjoy a delicious dinner at home
        or in the office!{" "}
      </p>
    </div>
  );
};

export default Summary;
