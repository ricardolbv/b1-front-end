import { CREATE_RETAIL, LOAD_RETAIL } from "./actions";

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

        default:
            return state;
    }
}