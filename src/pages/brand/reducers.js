import {
    LOAD_BRAND,
} from './actions'

export const brands = (state = [], action ) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_BRAND:
            const { allBrands } = payload;
            return allBrands;
        
        default:
            return state;
    }
}