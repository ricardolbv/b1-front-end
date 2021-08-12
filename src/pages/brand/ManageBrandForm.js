import { React, useState } from 'react';
import FormBrand from './FormBrand';
import { connect } from 'react-redux';
import { createBrand } from './thunks';
import { useHistory } from 'react-router-dom';

function ManageBrandForm (props)  {
    const history = useHistory();
    const [mailValidation, setMailValid] = useState(false);
    const [pswValidation, setPwsValid] = useState(false);
    const [cnpjValidation, setCnpjValid] = useState(false);
    const [nomeValidation, setNomeValid] = useState(false)
    const [retailValidation, setRetailValid] = useState(false)
    const [segmentoValidation, setSegValid] = useState(false);
    const [brand, setBrand] = useState({
        email: '',
        senha: '',
        nome: '',
        cnpj: '',
        segmento: '',
        varejo_responsavel: '',
        status: 1,
        telefone: ''
    });
 
    const handleSubmit = (target) => {
        if (mailIsValidated() && pswIsValid() &&
            nomeIsValid() && retailIsValidated()&&
            segmentoIsValidated()){
        props.onCreateBrand(brand);
        props.setToast(true)
        props.setMessage('Marca '+ brand.nome +' Cadastrada!') 
        props.setStatus("success");
        history.push("/home/brand" );
        }
    }

    const setValidationsToFalse = () => {
        setMailValid(false);
        setPwsValid(false);
        setCnpjValid(false);
        setNomeValid(false);
        setRetailValid(false);
        setSegValid(false);
    }

    const mailIsValidated = () => {
        if(brand.email === '' ){
            setMailValid(true);
            return false;
        }
        if(!brand.email.toLowerCase().includes('@') || !brand.email.toLowerCase().includes('.com')){
            setMailValid(true);
            return false;
        }
        return true;
    }

    const segmentoIsValidated = () => {
        if(brand.segmento === '' ){
            setSegValid(true);
            return false;
        }
        return true;
    }

    const pswIsValid = () => {
        if(brand.senha === '' ){
            setPwsValid(true);
            return false;
        }
        if(brand.senha.length <= 3){
            setPwsValid(true);
            return false;
        }
        return true;
    }

    const retailIsValidated = () => {
        if(brand.segmento === '' ){
            setSegValid(true);
            return false;
        }
        return true;
    }

    const nomeIsValid = () => {
    if(brand.nome == 0){
        setNomeValid(true);
        return false;
    }
    return true;
}
    

    function handleChange ({ target }) {
        setValidationsToFalse();
        setBrand({
            ...brand,
            [ target.id ]: target.value,
        })
    }

    function handleChangeSelect ({ target }) {
        setBrand({
            ...brand,
            segmento: target.value,
        })
    }

    function handleChangeSelectRetail ({ target }) {
        setBrand({
            ...brand,
            varejo_responsavel: target.value,
        })
    }


    return (
    <>
        <FormBrand  brand ={brand}
                    type={"Nova Marca"} 
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onChangeSelect={handleChangeSelect}
                    onChangeRetail={handleChangeSelectRetail}
                    mailValidation={mailValidation}
                    pswValidation={pswValidation}
                    cnpjValidation={cnpjValidation}
                    nomeValidation={nomeValidation}
                    retailValidation={retailValidation}
                    segmentoValidation={segmentoValidation}
        />
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    onCreateBrand: brand => dispatch(createBrand(brand))
})

export default connect(null, mapDispatchToProps)(ManageBrandForm);