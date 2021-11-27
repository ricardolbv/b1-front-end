import {
    CREATE_CAMPAIGN,
    LOAD_CAMPAIGNS,
    DELETE_CAMPAIGNS,
    UPDATE_CAMPAIGN,
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

        case DELETE_CAMPAIGNS:
            return state.filter(campaign => campaign.id !== payload)

        case UPDATE_CAMPAIGN:
            return state.map(campaign => {
                if(campaign.id !== payload.id){
                    return campaign
                }
                return {
                    ...campaign,
                    ...payload,
                }
            })

        default:
            return state;
    }
}