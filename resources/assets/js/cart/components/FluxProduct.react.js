'use strict';

import React from 'react';
import FluxCartActions from '../actions/FluxCartActions'

class FluxProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    selectVariant(e) {
        FluxCartActions.selectProduct(e.target.value);
    }

    addProductToCart(e) {
        let sku = this.props.selected.sku;
        let update = {
            name:  this.props.product.name,
            type:  this.props.selected.type,
            price: this.props.selected.price
        };
        FluxCartActions.addProductToCart(sku, update);
        FluxCartActions.updateCartVisible(true);
    }

    render() {
        let alreadyInCart = (this.props.selected.sku in this.props.cartItems)
            ? this.props.selected.inventory
                            - this.props.cartItems[this.propse.selected.sku].quantity
            : this.props.selected.inventory;


        return (
            <div className="flux-product">

                <div classname="flux-product-detail">
                    <h1 className="name">{this.props.product.name}</h1>

                    <p className="description">{this.props.product.description}</p>

                    <p className="price">Price: ${this.props.product.price}</p>
                    <select onChange={FluxProduct.selectVariant}>
                        {this.props.product.variants.map(function (variant,
                            index) {
                            return (
                                <option key={index}
                                        value={index}>{variant.type}
                                </option>
                            )
                        })}
                    </select>
                    <button type="button"
                            onClick={this.addProductToCart}
                            disabled={alreadyInCart > 0 ? '' : 'disabled'}>
                        {alreadyInCart > 0 ? 'Add To Cart' : ''}
                    </button>
                </div>

            </div>
        );
    }
}
FluxProduct.defaultProps = {};
FluxProduct.propTypes = {};

