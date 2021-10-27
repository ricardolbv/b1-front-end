export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN';
export const createCampaign = campaign => ({
    type: CREATE_CAMPAIGN,
    payload: campaign
}) 

export const LOAD_CAMPAIGNS = "LOAD_CAMPAIGNS";
export const loadCampaigns = allCapaigns => ({
    type: LOAD_CAMPAIGNS,
    payload: {allCapaigns}
})

