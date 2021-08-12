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

export const UPDATE_BRAND_STATUS = 'UPDATE_BRAND_STATUS';
export const updateNewStatus = brand => ({
    type: UPDATE_BRAND_STATUS,
    payload: brand
})

export const CREATE_BRAND = 'CREATE_BRAND';
export const createNewBrand = brand => ({
    type: CREATE_BRAND,
    payload: brand
})