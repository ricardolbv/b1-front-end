import axios from 'axios';
import {
    createCampaign,
    loadCampaigns,
    deleteCampaigns,
    updateCampaign,
    updateCampaignId,
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
        const resp = await axios.post('https://b1-backend.azurewebsites.net/campaign/create',
            _campanha);
        
        dispatch(openToast({open: true, status: 'success', message:"Campanha criada com sucesso!"}));
        dispatch(createCampaign(resp.data.data[0][0]));
        dispatch(updateCampaignId(resp.data.data[0][0].id))
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
        dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /campaign '+ error}))
    }
}

export const deleteCampaign = (id) => async (dispatch) => {
    try {   
        await axios.post('https://b1-backend.azurewebsites.net/campaign/delete', { idCampanha: id });
        dispatch(deleteCampaigns(id));
        dispatch(openToast({open: true, status: 'success', message:"Campanha deletada com sucesso!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /campaign/delete '+ error}))
    }
}

export const newFile = (file, fileName) => async (dispatch) => {
    try {
        //file.id_campanha = '123'
        const formData = new FormData();
        formData.append('file', file, fileName, { type: 'text/csv' });
        console.log(file)

        const config = {
            headers: {
              'content-type': 'multipart/form-data'
            }
          }

        await axios.post('https://upload-archive-node.azurewebsites.net/api/archive-upload', formData, config);
        dispatch(openToast({open: true, status: 'success', message:"Arquivo atualizado com sucesso!"}));
    
    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: Function de processamento de arq'+ error}))
    }  
}

export const actualizationCampaign = (campaign) => async (dispatch) => {
    try {
        const _campanha = {
            idCampanha: campaign.id,
            updateCampanha: campaign.produto,
            updateDescricao: campaign.descricao,
            updateDataInicio: auxData(new Date().toLocaleDateString()),
            updateDataFim: auxData(campaign.dataCriacao),
            updateIdMarca: campaign.marca, 
        }
        console.log(_campanha)
        await axios.post('https://b1-backend.azurewebsites.net/campaign/update',
            _campanha);
        dispatch(openToast({open: true, status: 'success', message:"Campanha atualizada com sucesso!"}));
        dispatch(updateCampaign(_campanha));
    }
    
catch (error) {
    dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /campaign/update '+ error}))
    }  
}

/** Função auxiliar para formartar data de requests */
const auxData = dt => {
    const [dia, mes, ano] = dt.split('/')

    return ano + '-' + mes + '-' + dia;
}