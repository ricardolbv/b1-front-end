import React, { useState } from 'react'
import { connect } from 'react-redux'
import ProfileInfos  from './ProfileInfos'

import { newPsw }  from './thunks';
import { useUser } from '../../auth/useUser';

export const ManageProfileInfos = (props) => {
    const user = useUser();
    const { usuarioId } = user;

    const [senhaValidation, setSenhaValid] = useState(false);
    const [novaSenhaValidation, setNovaSenhaValid] = useState(false);
    const [senha, setSenha] = useState({
        novaSenha: '',
        senha: '',
    });

    const handleSubmit = () => {
        if (senhaIsValidated() && novaSenhaIsValidated()){
                props.setLoading(true);

                senha.email = usuarioId;
                props.onNewPsw(senha);

                props.setLoading(false);
        }
    }

    function handleChange ({ target }) {
        setValidationsToFalse()
        setSenha({
            ...senha,
            [ target.id ]: target.value,
        })
    }

    function setValidationsToFalse(){ 
         setSenhaValid(false);
         setNovaSenhaValid(false);
        }

    /** Validações */
    const senhaIsValidated = () => {
        if(senha.senha === '' || senha.senha.length < 4){
            setSenhaValid(true);
            return false;
        }
        return true;
    }

    const novaSenhaIsValidated = () => {
        if(senha.novaSenha === '' || senha.novaSenha.length < 4){
            setNovaSenhaValid(true);
            return false;
        }
        return true;
    }

    return (
        <ProfileInfos 
            senha={senha}
            onChange={handleChange}
            onSubmit={handleSubmit}
            senhaValidation={senhaValidation}
            novaSenhaValidation={novaSenhaValidation}/>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    onNewPsw: profile => dispatch(newPsw(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfileInfos)
