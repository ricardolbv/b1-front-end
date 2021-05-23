import { CREATE_RETAIL, 
         LOAD_RETAIL, 
         UPDATE_RETAIL_STATUS,
         DELETE_RETAIL,
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
            // O que fazer para deixar imutavel?
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