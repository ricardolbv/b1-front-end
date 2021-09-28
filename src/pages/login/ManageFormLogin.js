import axios from 'axios';

import { React, useState } from 'react';
import { useToken } from '../../auth/useToken';
import { useHistory } from 'react-router-dom';
import FormLogin from './FormLogin';
import { connect } from 'react-redux';
//import { fetchLogin } from './thunks';
import { openToast } from '../../common/actions';

function ManageLoginForm (props)  {
    const [token, setToken] = useToken();
    const history = useHistory();

    const [mailValidation, setMailValid] = useState(false);
    const [pswValidation, setPwsValid] = useState(false);
    
    const [user, setUser] = useState({
        email: '',
        senha: '',
    });
 
    const handleSubmit = async (target) => {
        if (mailIsValidated() && pswIsValid()){
            try{
                const resp = await axios.post('https://b1-backend.azurewebsites.net/login', user);
                setToken(resp.data.data);
                history.push('/home')

            } catch (error){
                alert(error)
            }
        }
    }

    const setValidationsToFalse = () => {
        setMailValid(false);
        setPwsValid(false);;
    }

    const mailIsValidated = () => {
        if(user.email === '' ){
            setMailValid(true);
            return false;
        }
        else if(!user.email.toLowerCase().includes('@') || !user.email.toLowerCase().includes('.com')){
            setMailValid(true);
            return false;
        }
        return true;
    }

    const pswIsValid = () => {
        if(user.senha === '' ){
            setPwsValid(true);
            return false;
        }
        if(user.senha.length <= 3){
            setPwsValid(true);
            return false;
        }
        return true;
    }

    function handleChange ({ target }) {
        setValidationsToFalse();
        setUser({
            ...user,
            [ target.id ]: target.value,
        })
    }


    return (
    <>
        <FormLogin  user ={user}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    mailValidation={mailValidation}
                    pswValidation={pswValidation}
        />
    </>
    )
}



export default ManageLoginForm;