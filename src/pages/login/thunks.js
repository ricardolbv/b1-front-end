import axios from 'axios';
import { logIn } from './actions';
import { useToken } from '../../auth/useToken';
import { useHistory } from 'react-router-dom';


export const fetchLogin = (user) => async (dispatch, getState) => {
    try {   
        const [token, setToken] = useToken();
        const history = useHistory();

        const resp = await axios.post('https://b1-backend.azurewebsites.net/login', user)
        if (resp.status === 401)
            console.log("falha")
        setToken(resp.data.data)
        dispatch(logIn(resp.data.data));
        history.push('/init')

        
    } catch (error) {
        alert(error)
    }
}



