import {
    LOAD_BRAND,
    EXCLUDE_BRAND,
    UPDATE_BRAND_STATUS,
} from './actions'

export const brands = (state = [], action ) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_BRAND:
            const { allBrands } = payload;
            return allBrands;

        case EXCLUDE_BRAND:
            return state.filter(brand => brand.email !== payload.email)

        case UPDATE_BRAND_STATUS:
            return state.map(brand => {
                if (brand.email !== payload.email){
                    return brand;
                }            
                return {
                    ...brand,
                    ...payload,
                }
            })
        
        default:
            return state;
    }
}