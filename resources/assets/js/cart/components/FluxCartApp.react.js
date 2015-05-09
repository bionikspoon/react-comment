import React from 'react';
import CartStore from '../stores/CartStore';
import ProductStore from '../stores/ProductStore';
import FluxProduct from './FluxProduct.react';
import FluxCart from './FluxCart.react';

const _getState = () => ({
    product:         ProductStore.product,
    selectedProduct: ProductStore.selected,
    cartItems:       CartStore.cartItems,
    cartCount:       CartStore.cartCount,
    cartTotal:       CartStore.cartTotal,
    cartVisibility:  CartStore.cartVisibility
});

export default class FluxCartApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = _getState();
        this._onChange = this._onChange.bind(this)

    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    }


    render() {
        return (
            <div className="flux-cart-app">
                <FluxCart products={this.state.cartItems}
                          count={this.state.cartCount}
                          total={this.state.cartTotal}
                          visible={this.state.cartVisibility} />

                <FluxProduct product={this.state.product}
                             cartitems={this.state.cartItems}
                             selected={this.state.selectedProduct} />
                <h1>Hello Cart App</h1>
            </div>
        );
    }

    _onChange() {
        this.setState(_getState());
    }
}
FluxCartApp.defaultProps = {};
FluxCartApp.propTypes = {};