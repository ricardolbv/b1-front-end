import {
    LOGIN,
} from './actions';

export const user = ( state = {user: ''}, action ) => {
    const { type, payload } = action;

    switch (type){
        case LOGIN:
            return {...state, ...payload};

        default:
            return state
    }
}
