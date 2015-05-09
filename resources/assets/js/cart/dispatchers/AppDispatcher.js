'use strict';

import { Dispatcher } from 'flux';
import Constants from '../constants/FluxCartConstants';

class AppDispatcher extends Dispatcher {

    handleAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
                    action
        });
    }

    handleViewAction(action) {
        let payload = {
            source: Constants.ActionSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
}

export default new AppDispatcher();