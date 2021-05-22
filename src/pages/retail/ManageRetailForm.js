import { React, useState } from 'react';
import FormRetail from './FormRetail';
import { connect } from 'react-redux';
import { newRetail } from './thunks';
import { useHistory } from 'react-router-dom';

function ManageRetailForm (props)  {
    const history = useHistory();
    const [mailValidation, setMailValid] = useState(false);
    const [pswValidation, setPwsValid] = useState(false);
    const [cnpjValidation, setCnpjValid] = useState(false);
    const [nomeFantasiaValidation, setNomeFantasiaValid] = useState(false)
    const [razaoSocialValidation, setRazaoSocialValid] = useState(false)
 
    const handleSubmit = (target) => {
        if (mailIsValidated() && pswIsValid() &&
            nomeFantasiaIsValid() && razaoSocialIsValid()){
        props.setToast(true)
        props.setMessage('Varejo '+ retail.nome_fantasia +' Cadastrado!') 
        props.setStatus("success");
        props.onCreateRetail(retail);
        history.push("/home/retail" );
        }
    }

    const setValidationsToFalse = () => {
        setMailValid(false);
        setPwsValid(false);
        setCnpjValid(false);
        setNomeFantasiaValid(false);
        setRazaoSocialValid(false);
    }

    const mailIsValidated = () => {
        if(retail.emailVarejo === '' ){
            setMailValid(true);
            return false;
        }
        if(!retail.emailVarejo.toLowerCase().includes('@') || !retail.emailVarejo.toLowerCase().includes('.com')){
            setMailValid(true);
            return false;
        }
        return true;
    }

    const pswIsValid = () => {
        if(retail.senha === '' ){
            setPwsValid(true);
            return false;
        }
        if(retail.senha.length <= 3){
            setPwsValid(true);
            return false;
        }
        return true;
    }

    const razaoSocialIsValid = () => {
        if(retail.razao_social.length == 0){
            setRazaoSocialValid(true);
            return false;
        }
        return true;
    }
    const nomeFantasiaIsValid = () => {
    if(retail.nome_fantasia.length == 0){
        setNomeFantasiaValid(true);
        return false;
    }
    return true;
}
    const [retail, setRetail] = useState({
        cnpj: '',
        razao_social: '',
        nome_fantasia: '',
        telefone: '',
        segmento: '',
        emailVarejo: '',
        senha: '',
    });

    function handleChange ({ target }) {
        setValidationsToFalse();
        setRetail({
            ...retail,
            [ target.id ]: target.value,
        })
    }


    return (
    <>
        <FormRetail retail={retail} 
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    mailValidation={mailValidation}
                    pswValidation={pswValidation}
                    cnpjValidation={cnpjValidation}
                    nomeFantasiaValidation={nomeFantasiaValidation}
                    razaoSocialValidation={razaoSocialValidation}
        />
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    onCreateRetail: retail => dispatch(newRetail(retail))
})

export default connect(null, mapDispatchToProps)(ManageRetailForm);