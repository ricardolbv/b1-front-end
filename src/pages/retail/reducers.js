import { CREATE_RETAIL, 
         LOAD_RETAIL, 
         UPDATE_RETAIL_STATUS,
         DELETE_RETAIL,
         LOAD_SEGMENT,
         EDIT_RETAIL
 } from "./actions";

export const retails = ( state = [], action ) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_RETAIL: {
            const retail = [];
            retail.push(payload);
            return state.concat(retail);
        }

        case LOAD_RETAIL: {
            const { allRetail } = payload;
            return allRetail;
        }

        case UPDATE_RETAIL_STATUS: {
            return state.map(retail => {
                if (retail.email != payload.email) {
                    return retail;
                }
                return {
                    ...retail,
                    ...payload
                }
            })
        }
        //TODO : Verificar manuseio
        case EDIT_RETAIL: {
            const updatedRetail = state;
            return updatedRetail;
        }

        case DELETE_RETAIL: {
            const deleteRetail = state;
            return deleteRetail;
        }

        default:
            return state;
    }
}

export const segments = ( state = [], action ) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_SEGMENT: {
            const { allSegments } = payload;
            return allSegments;
        }
        default:
            return state;
    }
}