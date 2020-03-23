import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingSummary = Object.keys(props.ingredients)
      .map(key => {
        return <li key={key}><span style={{textTransform: "uppercase"}}>{key}</span>: {props.ingredients[key]}</li>;
      });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Ingredients</p>
      <ul>
        {ingSummary}
      </ul>
  <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;