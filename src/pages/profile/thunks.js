import axios from 'axios';
import { openToast } from '../../common/actions';

export const newPsw = (profile) => async (dispatch) => {
    try {
        const _profile = {
            usuarioId: profile.email,
            senha: profile.senha,
            nova_senha: profile.novaSenha
        }
        console.log(_profile)
        await axios.post('https://b1-backend.azurewebsites.net/profile/update-password',
            _profile);
        dispatch(openToast({open: true, status: 'success', message:"Senha atualizada com sucesso!"}));
    }
    
catch (error) {
    dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /profile/update-password '+ error}))
    }  
}
