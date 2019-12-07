import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css'

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((x, index) => {
                    return <BurgerIngredient key={igKey + index} type={igKey}/>
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformIngredients.length === 0) {
        transformIngredients = <div>Please start adding some ingredients!</div>;
    }
    return (
        <div className="burger">
            <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;