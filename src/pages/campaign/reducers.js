import {
    CREATE_CAMPAIGN,
    LOAD_CAMPAIGNS,
} from './actions'

export const campaigns = (state = [], action) => {
    const { type, payload } = action;

    switch (type){
        case CREATE_CAMPAIGN:
            const newCampaign = [];
            newCampaign.push(payload);

            return state.concat(newCampaign);

        case LOAD_CAMPAIGNS:
            const { allCapaigns } = payload;
            return allCapaigns;

        default:
            return state;
    }
}