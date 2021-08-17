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

export const fetchRetails = () => async (dispatch, getState) => {
    try {
        const retail = await axios.get('https://b1-backend.azurewebsites.net/retail');
        dispatch(loadRetail(retail.data.data[0]));

    } catch (error) {
        alert(error);
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
        dispatch(openToast({open: true, status: 'Erro', message: 'Erro de comunicação. Enpoint: /retail/create'}))
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
        const response = await axios.post('https://b1-backend.azurewebsites.net/retail/update-retail', 
        _retail)

        console.log(retail)
        dispatch(editRetail(retail));

    } catch (error) {
        alert(error)
    }
}

export const updateNewStatus = retail => async (dispatch) => {
    try {
        const _retail =  {
            email: retail.email,
            status: retail.status
        }
        const response = await axios.post('https://b1-backend.azurewebsites.net/retail/update-status', 
        _retail)
        dispatch(updateRetailStatus(retail));

    } catch (error) {
        alert(error)
    }
}

export const excludeRetail = retail => async (dispatch) => {
    try {
        const _retail =  {
            email: retail.email,
        }
        const response = await axios.post('https://b1-backend.azurewebsites.net/retail/delete', 
        _retail)
        dispatch(deleteRetail(retail));

    } catch (error) {
        alert(error)
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
