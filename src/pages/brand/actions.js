export const LOAD_BRAND = 'LOAD_BRAND';
export const loadBrands = allBrands => ({
    type: LOAD_BRAND,
    payload: { allBrands },
})

export const EXCLUDE_BRAND = 'EXCLUDE_BRAND';
export const excludeBrand = brand => ({
    type: EXCLUDE_BRAND,
    payload: brand
})