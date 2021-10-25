import {
    CREATE_CAMPAIGN,
} from './actions'

export const campaigns = (state = [], action) => {
    const { type, payload } = action;

    switch (action){
        case CREATE_CAMPAIGN:
            const newCampaign = [];
            newCampaign.push(payload);

            return state.concat(newCampaign);

        default:
            return state;
    }
}