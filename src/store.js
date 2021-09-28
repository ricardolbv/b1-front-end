import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { retails, segments } from '../src/pages/retail/reducers';
import { brands } from '../src/pages/brand/reducers';
import { toast } from '../src/common/reducers';
import { user } from '../src/pages/login/reducers';

const reducers = {
    retails,
    segments,
    brands,
    toast,
    user,
}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)