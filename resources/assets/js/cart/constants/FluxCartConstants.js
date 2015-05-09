import keyMirror from 'react/lib/keyMirror';

export default {

    ActionTypes: keyMirror({
        CART_ADD:       null,
        CART_REMOVE:    null,
        CART_VISIBLE:   null,
        SET_SELECTED:   null,
        RECEIVE_DATA:   null,
        SELECT_PRODUCT: null
    }),

    ActionSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION:   null
    })

};
