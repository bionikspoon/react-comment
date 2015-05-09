'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/FluxCartConstants';
import {EventEmitter} from 'events';


export default class BaseStore extends EventEmitter {
    constructor() {
        super();

        this.emitChange = this.emitChange.bind(this);
        this.addChangeListener = this.addChangeListener.bind(this);
        this.removeChangeListener = this.removeChangeListener.bind(this);

        this._dispatchToken = AppDispatcher.register(this._registerCallback.bind(this));

    }

    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    _registerCallback() {
        this.emitChange();
        return true;
    }

}