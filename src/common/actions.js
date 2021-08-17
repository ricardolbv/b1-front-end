export const OPEN_TOAST = 'OPENT_TOAST';
export const openToast = payload => ({
    type: OPEN_TOAST,
    payload: payload, 
})

export const CLOSE_TOAST = 'CLOSE_TOAST';
export const closeToast = payload => ({
    type: CLOSE_TOAST,
    payload: payload,
})