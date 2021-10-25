import axios from 'axios';
import {
    createCampaign
} from './actions';
import { openToast } from '../../common/actions';

export const newCampaign = (campaign) => async (dispatch) => {
    try {
        const _campanha = {
            campanha: campaign.produto,
            descricao: campaign.descricao,
            data_de_inicio: new Date().toLocaleDateString(),
            data_de_fim: campaign.dataCriacao,
            id_marca: campaign.marca, 
        }
    
        await axios.post('https://b1-backend.azurewebsites.net/campaign/create',
            _campanha);
        dispatch(openToast({open: true, status: 'success', message:"Campanha criada com sucesso!"}));
        dispatch(createCampaign(_campanha));
    }
    
catch (error) {
    dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /campaign/create '+ error}))
    }  
}