import axios from 'axios';
import {
    loadBrands,
    excludeBrand,
    updateNewStatus,
} from './actions';

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