'use strict';

import React from 'react';
import FluxCartActions from '../actions/FluxCartActions'


export default class FluxCart extends React.Component {
    constructor(props) {
        super(props);
    }

    closeCart() {
        FluxCartActions.updateCartVisible(false);
    }

    openCart() {
        FluxCartActions.updateCartVisible(true);
    }

    removeFromCart(sku) {
        FluxCartActions.removeFromCart(sku);
        FluxCartActions.updateCartVisible(false);
    }

    render() {
        return (
            <div className={"flux-cart" + (this.props.visibility ? 'active' : '')}>
                <div className="mini-cart">
                    <button className="close-cart"
                            type="button"
                            onClick={this.closeCart}>
                        ×
                    </button>
                    <ul>
                        {Object.keys(products).map(function (product) {
                            return (
                                <li key={product}>
                                    <h1 className="name">{products[product].name}</h1>

                                    <p className="type">
                                        {products[product].type}
                                        x {products[product].quantity}
                                    </p>

                                    <p className="price">
                                        ${(products[product].price
                                    * products[product].quantity).toFixed(2)}
                                    </p>
                                    <button className="remove-item"
                                            type="button"
                                            onClick={self.removeFromCart.bind(this, product)}>
                                        Remove
                                    </button>
                                </li>
                            )
                        })}

                    </ul>
                    <span className="total">Total: ${this.props.total}</span>
                </div>
                <button className="view-cart"
                        type="button"
                        onClick={this.openCart}
                        disabled={Object.keys(this.props.products).length > 0 ? "" : "disabled"}>
                    View Cart ({this.props.count})
                </button>

            </div>
        );
    }
}
FluxCart.defaultProps = {};
FluxCart.propTypes = {};
