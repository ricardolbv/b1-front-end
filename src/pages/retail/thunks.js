import { loadRetail, createRetail, updateRetailStatus, deleteRetail } from './actions';
import axios from 'axios';

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
        const now = Date.now()
        const _now = new Date(now)
        const _retail =  {
            inscricao: 'tst',
            cnpj: retail.cnpj,
            razao_social: retail.razao_social,
            nome_fantasia: retail.nome_fantasia,
            telefone: retail.telefone,
            status: 1,
            id_cargo: 1,
            id_login: 1,
            id_segmento: 1,
            created_at: _now,
            updated_at: _now,
        }
        const response = await axios.post('https://b1-backend.azurewebsites.net/retail', 
        _retail)

        dispatch(createRetail(retail));

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
