import { React, useState } from 'react';
import FormRetail from './FormRetail';
import { connect } from 'react-redux';
import { editedRetail } from './thunks';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';

function ManageRetailFormEdit (props)  {
    const history = useHistory();
    const retails = useSelector(state => state.retails);
    let {id} = useParams();
    const [_retail] = retails.filter(item => item.email == id);

    const [mailValidation, setMailValid] = useState(false);
    const [pswValidation, setPwsValid] = useState(false);
    const [cnpjValidation, setCnpjValid] = useState(false);
    const [nomeFantasiaValidation, setNomeFantasiaValid] = useState(false);
    const [razaoSocialValidation, setRazaoSocialValid] = useState(false);
    const [segmentoValidation, setSegValid] = useState(false);
    const [retail, setRetail] = useState({
        cnpj: _retail.cnpj,
        razao_social: _retail.razao_social,
        nome_fantasia: _retail.nome_fantasia,
        telefone: _retail.telefone,
        segmento: _retail.id_segmento,
        email: _retail.email,
        senha: _retail.senha,
        inscricao: _retail.inscricao,
    });
 
    const handleSubmit = (target) => {
        if (mailIsValidated() && pswIsValid() &&
            nomeFantasiaIsValid() && razaoSocialIsValid() &&
            segmentoIsValidated()){
        props.onEditRetail(retail);
        history.push("/home/retail" );
        }
    }

    const setValidationsToFalse = () => {
        setMailValid(false);
        setPwsValid(false);
        setCnpjValid(false);
        setNomeFantasiaValid(false);
        setRazaoSocialValid(false);
        setSegValid(false);
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

    const segmentoIsValidated = () => {
        if(retail.segmento === '' ){
            setSegValid(true);
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
    

    function handleChange ({ target }) {
        setValidationsToFalse();
        setRetail({
            ...retail,
            [ target.id ]: target.value,
        })
    }

    function handleChangeSelect ({ target }) {
        console.log(target)
        setRetail({
            ...retail,
            segmento: target.value,
        })
    }


    return (
    <>
        <FormRetail retail={retail} 
                    type={'Editando varejo'}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onChangeSelect={handleChangeSelect}
                    mailValidation={mailValidation}
                    pswValidation={pswValidation}
                    cnpjValidation={cnpjValidation}
                    nomeFantasiaValidation={nomeFantasiaValidation}
                    razaoSocialValidation={razaoSocialValidation}
                    segmentoValidation={segmentoValidation}
        />
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    onEditRetail: retail => dispatch(editedRetail(retail))
})

export default connect(null, mapDispatchToProps)(ManageRetailFormEdit);