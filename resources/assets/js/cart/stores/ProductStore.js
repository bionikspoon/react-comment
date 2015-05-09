'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/FluxCartConstants';
import BaseStore from './BaseStore';


class ProductStore extends BaseStore {
    constructor() {
        super();
        this._product = {};
        this._selected = null;

        this.loadProductData = this.loadProductData.bind(this);
    }

    get selected() {
        return this._selected;
    }

    set selected(index) {
        this._selected = this._product.variants[index];
    }

    get product(){
        return this._product;
    }

    loadProductData(data) {
        this._product = data[0];
        this._selected = data[0].variants[0];
    }


    _registerCallback(payload) {
        let action = payload.action;

        switch (action.actionType) {
            case Constants.RECEIVE_DATA:
                this.loadProductData(action.data);
                break;

            case Constants.SELECT_PRODUCT:
                this.selected = action.data;
                break;

            default:
                return true;
        }

        return super._registerCallback();
    }

}

export default new ProductStore();