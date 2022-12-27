import React, { useReducer } from "react";
import CartContext from "./CartContext";

const cartReducer = (state, action) => {
  // ADDING MEALS TO THE CART
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.val.price * action.val.quantity;

    let updatedMeals;

    const existingMealIndex = state.meals.findIndex(
      (meal) => meal.id === action.val.id
    );
    const existingMeal = state.meals[existingMealIndex];

    if (existingMeal) {
      const updatedMeal = {
        ...existingMeal,
        quantity: existingMeal.quantity + action.val.quantity,
      };
      updatedMeals = [...state.meals];
      updatedMeals[existingMealIndex] = updatedMeal;
    } else {
      updatedMeals = state.meals.concat(action.val);
    }

    return { meals: updatedMeals, totalAmount: updatedTotalAmount };
  }

  //REMOVING MEALS FROM THE CART
  if (action.type === "REMOVE") {
    let updatedMeals;

    const existingMealIndex = state.meals.findIndex(
      (meal) => meal.id === action.val
    );
    const existingMeal = state.meals[existingMealIndex];

    if (existingMeal.quantity === 1) {
      updatedMeals = state.meals.filter((meal) => meal.id !== action.val);
    } else {
      const updatedMeal = {
        ...existingMeal,
        quantity: existingMeal.quantity - 1,
      };
      updatedMeals = [...state.meals];
      updatedMeals[existingMealIndex] = updatedMeal;
    }

    const updatedTotalAmount = state.totalAmount - existingMeal.price;

    return { meals: updatedMeals, totalAmount: updatedTotalAmount };
  }

  // CLEARING THE CART
  if (action.type === "CLEAR") {
    return { meals: [], totalAmount: 0 };
  }

  return { meals: [], totalAmount: 0 };
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    meals: [],
    totalAmount: 0,
  });

  const addMealToCart = (meal) => {
    return dispatchCartAction({ type: "ADD", val: meal });
  };

  const removeMealFromCart = (id) => {
    return dispatchCartAction({ type: "REMOVE", val: id });
  };

  const clearCart = () => {
    return dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    meals: cartState.meals,
    totalAmount: cartState.totalAmount,
    addMeal: addMealToCart,
    removeMeal: removeMealFromCart,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
