import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./ListItem.module.css";
import ListItemForm from "./ListItemForm";

const ListItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addMealToCart = (quantity) => {
    cartCtx.addMeal({
      id: props.id,
      price: props.price,
      name: props.name,
      quantity: quantity,
    });
  };

  return (
    <div className={classes.listItemContainer}>
      <div>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>$ {props.price}</p>
      </div>
      <div>
        <ListItemForm onAddMeal={addMealToCart} />
      </div>
    </div>
  );
};

export default ListItem;
