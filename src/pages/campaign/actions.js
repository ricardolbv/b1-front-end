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

export const DELETE_CAMPAIGNS = "DELETE_CAMPAIGNS";
export const deleteCampaigns = campaign => ({
    type: DELETE_CAMPAIGNS,
    payload: campaign
})

export const UPDATE_CAMPAIGN = "UPDATE_CAMPAIGN";
export const updateCampaign = campaign => ({
    type: UPDATE_CAMPAIGN,
    payload: campaign
})

