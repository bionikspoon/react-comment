import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/FluxCartConstants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import _ from 'underscore';

class CartStore extends BaseStore {
    constructor() {
        super();

        this._products = {};
        this._cartVisibility = false;

        this.addProductToCart = this.addProductToCart.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
    }

    addProductToCart(sku, update) {
        if (sku in this._products) {
            update.quantity = this._products[sku].quantity + 1;
        } else {update.quantity = 1;}
        this._products[sku] = _.extend({}, this._products[sku], update)
    }

    removeItemFromCart(sku) {
        delete this._products[sku];
    }

    get cartVisibility() {
        return this._cartVisibility;

    }

    set cartVisibility(cartVisibility) {
        this._cartVisibility = cartVisibility;
    }

    get cartItems() {
        return this._products;
    }

    get cartCount() {
        return Object.keys(this._products).length;
    }

    get cartTotal() {
        let total = 0;
        let product;

        for (product in this._products) {
            if (this._products.hasOwnProperty(product)) {
                total += this._products[product].price
                    * this._products[product].quantity;
            }
        }
        return total.toFixed(2);
    }


    _registerCallback(payload) {
        var action = payload.action;

        switch (action.actionType) {
            case Constants.CART_ADD:
                this.addProductToCart(action.sku, action.update);
                break;

            case Constants.CART_VISIBLE:
                this.cartVisibility = action.cartVisibility;
                break;

            case Constants.CART_REMOVE:
                this.removeItemFromCart(action.sku);
                break;

            default:
                return true;
        }
        return super._registerCallback();
    }
}

export default new CartStore();