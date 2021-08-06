import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-dilevery-cc05d-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        setIsLoading(false);
        throw new Error();
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const keys in responseData) {
        loadedMeals.push({
          id: keys,
          name: responseData[keys].name,
          description: responseData[keys].description,
          price: responseData[keys].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      price={meal.price}
      description={meal.description}
      name={meal.name}
    />
  ));

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading.........</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsLoading}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
