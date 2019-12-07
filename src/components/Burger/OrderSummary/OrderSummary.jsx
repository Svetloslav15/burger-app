import React from 'react';
import Asux from '../../../hocs/Asux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}><span className="capitalize">{key}: {props.ingredients[key]}</span></li>
        });
    return (
        <Asux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <h2>Price: $ {props.totalPrice.toFixed(2)}</h2>
            <Button
                buttonType="danger"
                clicked={props.purchaseCanceled}>Cancel</Button>
            <Button
                buttonType="success"
                clicked={props.purchaseContinued}>Continue</Button>
        </Asux>
    )
};

export default orderSummary;