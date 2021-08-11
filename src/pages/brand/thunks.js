import axios from 'axios';
import {
    loadBrands,
} from './actions';

export const fetchBrands = () => async (dispatch, getState) => {
    try {   
        const brand = await axios.get('https://b1-backend.azurewebsites.net/brand');
        dispatch(loadBrands(brand.data.data[0]));

    } catch (error) {
        alert(error)
    }
}