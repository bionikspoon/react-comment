'use strict';

import FluxCartActions from '../actions/FluxCartActions'

export default {
    getProductData() {
        var data = JSON.parse(localStorage.getItem('product'));
        FluxCartActions.receiveProduct(data);
    }
}