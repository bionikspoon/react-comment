'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher'
import Constants from '../constants/FluxCartConstants'


export default {

    receiveProduct(data) {
        AppDispatcher.handleViewAction({
            actionType: Constants.RECEIVE_DATA,
                        data
        });
    },

    selectProduct(data) {
        AppDispatcher.handleViewAction({
            actionType: Constants.SELECT_PRODUCT,
                        data
        });
    },

    addProductToCart(sku, update){
        AppDispatcher.handleViewAction({
            actionType: Constants.CART_ADD,
                        sku,
                        update
        });
    },

    removeFromCart(sku){
        AppDispatcher.handleViewAction({
            actionType: constants.CART_REMOVE,
                        sku
        })
    },

    updateCartVisible(cartVisibility){
        AppDispatcher.handleViewAction({
            actionType: constants.CART_VISIBLE,
                        cartVisibility
        })
    }


};
