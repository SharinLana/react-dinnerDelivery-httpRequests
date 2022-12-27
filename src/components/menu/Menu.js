import React, { useEffect, useState } from "react";
import classes from "./Menu.module.css";
import Summary from "./Summary";
import ListItem from "./ListItem";

const Menu = () => {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedMeals, setFetchedMeals] = useState([]);

  // FETCHING FIREBASE DATA ON LOAD
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-dinner-delivery-default-rtdb.firebaseio.com/meal.json"
      );
      const data = await response.json();

      // FIREBASE DATA IS AN OBJECT THAT CONTAINS OTHER OBJECTS.
      // I'M TRANSFORMING IT TO AN ARRAY TO BE ABLE TO MAP THROUGH IT LATER
      const loadedData = [];
      Object.entries(data).forEach((obj) => loadedData.push(obj));

      setFetchedMeals(loadedData);
      setIsLoaded(true);
      setError();
    };

    // HANDLING ERRORS OF THE PROMISE
    fetchData().catch((err) => {
      console.log(err.message);
      setError("Something went wrong!");
      setFetchedMeals([]);
      setIsLoaded(false);
    });
  }, []);

  // DISPLAYING THE ERROR MESSAGE
  const errorMessage = error ? <p>{error}</p> : "";

  // DISPLAYING THE FETCHED DATA
  const meals = fetchedMeals.map((meal) => {
    return (
      <ListItem
        key={meal[0]}
        id={meal[0]}
        name={meal[1].name}
        description={meal[1].description}
        price={meal[1].price}
      />
    );
  });

  return (
    <div className={classes.menuContainer}>
      <Summary />
      {!isLoaded && !error && <p>Loading...</p>}
      {errorMessage}
      {isLoaded && <ul className={classes.list}>{meals}</ul>}
    </div>
  );
};

export default Menu;
