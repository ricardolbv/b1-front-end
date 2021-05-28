export const CREATE_RETAIL = 'CREATE_RETAIL';
export const createRetail = retail => ({
    type: CREATE_RETAIL,
    payload: retail,
})

export const EDIT_RETAIL = 'EDIT_RETAIL';
export const editRetail = retail => ({
    type: EDIT_RETAIL,
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

export const LOAD_SEGMENT = 'LOAD_SEGMENT';
export const loadSegment = allSegments => ({
    type: LOAD_SEGMENT,
    payload: { allSegments }
})