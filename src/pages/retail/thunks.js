import axios from 'axios';
import { 
    loadSegment, 
    loadRetail, 
    createRetail, 
    updateRetailStatus, 
    deleteRetail,
    editRetail, 
} 
from './actions';
import { openToast } from '../../common/actions';

export const fetchRetails = (id) => async (dispatch, getState) => {
    try {
        const retail = await axios.get('https://b1-backend.azurewebsites.net/retail/'+id);
        dispatch(loadRetail(retail.data.data[0]));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: "Erro de comunicação. Endpoint: /retail/:IdUsuario "+ error}));
    }
}

export const newRetail = retail => async (dispatch) => {
    try {
        const _retail =  {
            email: retail.email,
            inscricao: retail.inscricao,
            senha: retail.senha,
            cnpj: retail.cnpj,
            razao_social: retail.razao_social,
            nome_fantasia: retail.nome_fantasia,
            telefone: retail.telefone,
            id_cargo: 2,
            id_segmento: parseInt(retail.segmento),
            status: retail.status,
        }
        
        await axios.post('https://b1-backend.azurewebsites.net/retail/create', 
        _retail)
        dispatch(openToast({open: true, status: 'success', message:"Varejo criado com sucesso!"}));
        dispatch(createRetail(_retail));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /retail/create'}))
    }
}

export const editedRetail = retail => async (dispatch) => {
    try {
        const _retail = {
            email: retail.email,
            update_inscricao: retail.inscricao,
            update_senha: retail.senha,
            update_cnpj: retail.cnpj,
            update_razao_social: retail.razao_social,
            update_nome_fantasia: retail.nome_fantasia,
            update_telefone: retail.telefone,
            update_id_segmento: retail.segmento,
        }
        await axios.post('https://b1-backend.azurewebsites.net/retail/update-retail', 
        _retail)
        dispatch(openToast({open: true, status: 'success', message:"Varejo editado com sucesso!"}));
        dispatch(editRetail(retail));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /retail/update-retail'}))
    }
}

export const updateNewStatus = retail => async (dispatch) => {
    try {
        const _retail =  {
            email: retail.email,
            status: retail.status
        }
        await axios.post('https://b1-backend.azurewebsites.net/retail/update-status', 
        _retail)
        dispatch(openToast({open: true, status: 'success', message:"Varejo atualizado com sucesso!"}));
        dispatch(updateRetailStatus(retail));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /retail/update-status'}))
    }
}

export const excludeRetail = retail => async (dispatch) => {
    try {
        const _retail =  {
            email: retail.email,
        }
        await axios.post('https://b1-backend.azurewebsites.net/retail/delete', 
        _retail)
        dispatch(openToast({open: true, status: 'success', message: 'Varejo excluido com sucesso!'}));
        dispatch(deleteRetail(retail));

    } catch (error) {
        dispatch(openToast({open: true, status: 'warning', message: 'Varejo possui usuário(s) de Marca associados!'}))
    }
}

export const fetchSegments = () => async (dispatch, getState) => {
    try {
        const retail = await axios.get('https://b1-backend.azurewebsites.net/segment');
        dispatch(loadSegment(retail.data.data[0]));

    } catch (error) {
        alert(error);
    }
}
