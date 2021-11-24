import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { retails, segments } from '../src/pages/retail/reducers';
import { brands } from '../src/pages/brand/reducers';
import { toast } from '../src/common/reducers';
import { user } from '../src/pages/login/reducers';
import { campaigns } from '../src/pages/campaign/reducers';

import { LOGOUT } from './pages/home/actions';

const reducers = {
    retails,
    segments,
    brands,
    toast,
    user,
    campaigns,
}

const appReducer = (state, action) => {

    switch (action.type) {
        case  LOGOUT:
            return rootReducer(undefined, action)
        default:
            return rootReducer(state, action)
    }
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore (
    appReducer,
    composeWithDevTools(applyMiddleware(thunk))
)