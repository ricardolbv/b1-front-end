export const LOAD_BRAND = 'LOAD_BRAND';
export const loadBrands = allBrands => ({
    type: LOAD_BRAND,
    payload: { allBrands },
})