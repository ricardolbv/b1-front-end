import axios from 'axios';
import {
    loadBrands,
    excludeBrand,
    updateNewStatus,
    createNewBrand,
    editBrand,
} from './actions';
import { openToast } from '../../common/actions';

export const fetchBrands = () => async (dispatch, getState) => {
    try {   
        const brand = await axios.get('https://b1-backend.azurewebsites.net/brand');
        dispatch(loadBrands(brand.data.data[0]));

    } catch (error) {
        alert(error)
    }
}

export const deleteBrand = (brand) => async (dispatch) => {
    try {
        const _brand =  {
            email: brand.email,
        }   
        await axios.post('https://b1-backend.azurewebsites.net/brand/delete',
            _brand);
        dispatch(excludeBrand(brand))

    } catch (error) {
        alert(error)
    }
}

export const updateBrandStatus = (brand) => async (dispatch) => {
    try {
        const _brand =  {
            email: brand.email,
            status: brand.status,
        }   
        await axios.post('https://b1-backend.azurewebsites.net/brand/update-status',
            _brand);
        dispatch(updateNewStatus(brand))

    } catch (error) {
        alert(error)
    }
}

export const createBrand = (brand) => async (dispatch) => {
    try {
        const _brand = {
            email: brand.email,
            senha: brand.senha,
            nome: brand.nome,
            cnpj: brand.cnpj,
            telefone: brand.telefone,
            status: brand.status,
            id_cargo: 3,
            id_segmento: parseInt(brand.segmento),
            id_varejo: parseInt(brand.varejo_responsavel),
        }
    
        await axios.post('https://b1-backend.azurewebsites.net/brand/create',
            _brand);
        dispatch(openToast({open: true, status: 'success', message:"Marca criada com sucesso!"}));
        dispatch(createNewBrand(_brand));
    }
    
catch (error) {
    dispatch(openToast({open: true, status: 'Erro', message: 'Erro de comunicação. Enpoint: /brand/create'}))
    }  
}

export const changeBrand = (brand) => async (dispatch) => {
    try {
        const _brand = {
            email: brand.email,
            update_nome: brand.senha,
            update_cnpj: brand.cnpj,
            update_telefone: brand.telefone,
            update_id_segmento: brand.segmento,
            update_id_varejo: brand.varejo_responsavel
        }
        
        await axios.post('https://b1-backend.azurewebsites.net/brand/update-brand',
            _brand);
        dispatch(editBrand(brand))
    }
    
catch (error) {
    alert(error)
    }  
}