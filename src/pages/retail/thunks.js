import { loadRetail, createRetail } from './actions';
import axios from 'axios';

export const fetchRetails = () => async (dispatch, getState) => {
    try {
        const retail = await axios.get('https://b1-backend.azurewebsites.net/retail');
        dispatch(loadRetail(retail.data.data[0]));

    } catch (error) {
        alert(error);
    }
}
/*
export const newPlayer = player => async (dispatch) => {
    try {
        console.log(player)
        const response = await axios.post('http://localhost:3000/jogador', 
        {
            nome: player.nome,
            apelido: player.nome,
            posicao: "test",
            telefone: "54687",
            id_time: 1,
            data_nasc: "01/01/1998"
        })

        console.log(response);
        dispatch(createPlayer(response.data));

    } catch (error) {
        alert(error)
    }
}*/