import {
    LOAD_BRAND,
    EXCLUDE_BRAND,
} from './actions'

export const brands = (state = [], action ) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_BRAND:
            const { allBrands } = payload;
            return allBrands;

        case EXCLUDE_BRAND:
            return state.filter(brand => brand.email !== payload.email)
        
        default:
            return state;
    }
}