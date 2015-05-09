'use strict';

import { Dispatcher } from 'flux';
import Constants from '../constants/FluxCartConstants';

class AppDispatcher extends Dispatcher {

    handleServerAction(action) {
        this.dispatch({
            source: Constants.ActionSources.SERVER_ACTION,
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
