import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = props => {
  let ingredients = [];
  Object.keys(props.ingredients).forEach(key => {
    for (let i = 0; i < props.ingredients[key]; i++)
      ingredients.push(<BurgerIngredient key={key + i} type={key} />);
  });

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients!!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
