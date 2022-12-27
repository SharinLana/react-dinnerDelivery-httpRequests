import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";
import OrderForm from "./OrderForm";

const Cart = (props) => {
  const [orderPressed, setOrderPressed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);

  const addMoreMealsToCart = (meal) => {
    cartCtx.addMeal({ ...meal, quantity: 1 });
  };

  const removeMeal = (id) => {
    cartCtx.removeMeal(id);
  };

  const meal = cartCtx.meals.map((meal) => {
    return (
      <>
        <CartItem
          meal={meal}
          onAdd={addMoreMealsToCart.bind(null, meal)}
          onRemove={removeMeal.bind(null, meal.id)}
          key={meal.id}
        />
      </>
    );
  });

  // OPENING THE ORDER FORM
  const orderHandler = () => {
    setOrderPressed(true);
  };

  // GETTING THE VALID INPUT DATA FROM USER
  // AND POSTING IT ON FIREBASE
  const getValidUserData = async (userData) => {
    setIsSubmitted(true); // to send a message "Your order has been submitted"

    await fetch(
      "https://react-dinner-delivery-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.meals,
        }),
      }
    );

    // CLEARING THE CART
    cartCtx.clearCart();
  };

  // THE CART + ORDER FORM
  const cartAndForm = (
    <>
      <div className={classes.tableContainer}>
        <p className={classes.items}>Items</p>
        <p className={classes.price}>Price</p>
        <p className={classes.quantity}>Quantity</p>
        <p className={classes.subtotal}>Subtotal</p>
      </div>

      {/* LIST OF PURCHASES */}
      {meal}

      <hr />
      <div className={classes.totalAmountContainer}>
        <h3 className={classes.totalAmountText}>Total Amount: </h3>
        <p className={classes.totalPrice}>$ {cartCtx.totalAmount.toFixed(2)}</p>
      </div>
      {cartCtx.meals.length > 0 && (
        <div className={classes.orderBtnContainer}>
          {!orderPressed && (
            <button className={classes.orderBtn} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}

      {cartCtx.meals.length > 0 && orderPressed && (
        <OrderForm
          onGetValidUserData={getValidUserData}
          orderPressed={orderPressed}
          isSubmitted={isSubmitted}
        />
      )}
    </>
  );

  // MESSAGE ABOUT THE SUBMITTED ORDER
  const orderSubmitted = (
    <p className={classes.orderSent}>Your order has been successfully sent!</p>
  );

  return (
    <Modal hideModal={props.onHideModal}>
      {!isSubmitted && cartAndForm}
      {isSubmitted && orderSubmitted}
    </Modal>
  );
};

export default Cart;
