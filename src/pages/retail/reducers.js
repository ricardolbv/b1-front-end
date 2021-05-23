import { CREATE_RETAIL, LOAD_RETAIL, UPDATE_RETAIL_STATUS } from "./actions";

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

        default:
            return state;
    }
}