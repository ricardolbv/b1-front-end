export const CREATE_RETAIL = 'CREATE_RETAIL';
export const createRetail = retail => ({
    type: CREATE_RETAIL,
    payload: retail,
})

export const LOAD_RETAIL = 'LOAD_RETAIL';
export const loadRetail = allRetail => ({
    type: LOAD_RETAIL,
    payload: { allRetail }
})

export const UPDATE_RETAIL_STATUS = 'UPDATE_RETAIL_STATUS';
export const updateRetailStatus = updatedRetail => ({
    type: UPDATE_RETAIL_STATUS,
    payload: updatedRetail
})

export const DELETE_RETAIL = 'DELETE_RETAIL';
export const deleteRetail = retail => ({
    type: UPDATE_RETAIL_STATUS,
    payload: retail
})