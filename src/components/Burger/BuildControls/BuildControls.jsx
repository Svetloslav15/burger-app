import React from 'react';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const buildControls = (props) => (
    <div className="build-controls">
        {props.purchasable}
        <p>Current Price: $ {props.totalPrice.toFixed(2)}</p>
        {controls.map(x => (
            <BuildControl
                key={x.label}
                label={x.label}
                added={() => props.ingredientAdded(x.type)}
                removed={() => props.ingredientRemoved(x.type)}/>
        ))}
        <button
            disabled={!props.purchasable}
            className="order-button"
            onClick={props.ordered}>ORDER NOW
        </button>
    </div>
);

export default buildControls;