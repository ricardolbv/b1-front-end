import {
    OPEN_TOAST,
    CLOSE_TOAST,
} from './actions';

export const toast = ( state = { open: false, status: '', message: '' }, action ) => {
    const { type, payload } = action;

    switch (type){
        case OPEN_TOAST:
            return {...state, ...payload};
        
        case CLOSE_TOAST:
            return {...state, ...payload};
        
        default:
            return state
    }
}