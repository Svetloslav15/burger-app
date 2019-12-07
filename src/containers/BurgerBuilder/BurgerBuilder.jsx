import React, {Component} from 'react';
import Asux from '../../hocs/Asux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ingredientPrices = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.7,
    meat: 1.6,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2,
        purchasable: false,
        purchasing: false
    };

    purchaseContinueHandler = () => {
      alert('You continue!');
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(x => ingredients[x])
            .reduce((a, b) => {
                return a + b
            }, 0);
        this.setState({purchasable: sum > 0});
    };

    addIngredientHandler = (type) => {
        const ingredientsCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = ingredientsCount;
        const newPrice = ingredientPrices[type] + this.state.totalPrice;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchasable(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const ingredientsCount = this.state.ingredients[type] - 1;
        if (ingredientsCount !== -1) {
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = ingredientsCount;
            const newPrice = this.state.totalPrice - ingredientPrices[type];
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            });
            this.updatePurchasable(updatedIngredients);
        }
    };

    render = () => {
        return (
            <Asux>
                {
                    this.state.purchasing ? (
                        <Modal
                            show={this.state.purchasing}
                            modalClosed={this.purchaseCancelHandler}>
                            <OrderSummary
                                totalPrice={this.state.totalPrice}
                                ingredients={this.state.ingredients}
                                purchaseCanceled={this.purchaseCancelHandler}
                                purchaseContinued={this.purchaseContinueHandler}/>
                        </Modal>) : null
                }
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}/>
            </Asux>
        )
    }
}

export default BurgerBuilder;