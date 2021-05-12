import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { retails } from '../src/pages/retail/reducers'

const reducers = {
    retails,
}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)