'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher'
import Constants from '../constants/FluxCartConstants'


export default {

    receiveProduct(data) {
        AppDispatcher.handleAction({
            actionType: Constants.RECEIVE_DATA,
                        data
        });
    },

    selectProduct(data) {
        AppDispatcher.handleAction({
            actionType: Constants.SELECT_PRODUCT,
                        data
        });
    },

    addProductToCart(sku, update){
        AppDispatcher.handleAction({
            actionType: Constants.CART_ADD,
                        sku,
                        update
        });
    },

    removeProductFromCart(sku){
        AppDispatcher.handleAction({
            actionType: Constants.CART_REMOVE,
                        sku
        })
    },

    updateCartVisible(cartVisibility){
        AppDispatcher.handleAction({
            actionType: Constants.CART_VISIBLE,
                        cartVisibility
        })
    }


};