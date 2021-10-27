import axios from 'axios';
import {
    createCampaign,
    loadCampaigns,
} from './actions';
import { openToast } from '../../common/actions';

export const newCampaign = (campaign) => async (dispatch) => {
    try {
        const _campanha = {
            campanha: campaign.produto,
            descricao: campaign.descricao,
            data_de_inicio: auxData(new Date().toLocaleDateString()),
            data_de_fim: auxData(campaign.dataCriacao),
            id_marca: campaign.marca, 
        }
        console.log(_campanha)
        await axios.post('https://b1-backend.azurewebsites.net/campaign/create',
            _campanha);
        dispatch(openToast({open: true, status: 'success', message:"Campanha criada com sucesso!"}));
        dispatch(createCampaign(_campanha));
    }
    
catch (error) {
    dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /campaign/create '+ error}))
    }  
}

export const fetchCampaigns = (id) => async (dispatch) => {
    try {   
        const campaigns = await axios.get('https://b1-backend.azurewebsites.net/campaign/'+id);
        console.log(campaigns.data.data[0])
        dispatch(loadCampaigns(campaigns.data.data[0]));

    } catch (error) {
        alert(error)
    }
}

const auxData = dt => {
    const [dia, mes, ano] = dt.split('/')

    return ano + '-' + mes + '-' + dia;
}