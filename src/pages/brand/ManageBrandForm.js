import { React, useState } from 'react';
import FormBrand from './FormBrand';
import { connect } from 'react-redux';
import { createBrand } from './thunks';
import { openToast } from '../../common/actions';
import { useHistory } from 'react-router-dom';

function ManageBrandForm (props)  {
    const [isLoading, setLoading] = useState(false);
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
 
    const handleSubmit = async () => {
        if (mailIsValidated() && pswIsValid() &&
            nomeIsValid() && retailIsValidated()&&
            segmentoIsValidated()){

        setLoading(true);
        await props.onCreateBrand(brand);
        setLoading(true);

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
        else if(!brand.email.toLowerCase().includes('@') || !brand.email.toLowerCase().includes('.com')){
            setMailValid(true);
            return false;
        }
        // Verifico no state se há um email já cadastrado:
        else if(props.brands.find(_brand => _brand.email == brand.email)){
            props.onOpenToast({open: true, status: 'warning', message:"Email já cadastrado em outra marca!"})
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
                    type={"Nova marca"} 
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
                    isLoading={isLoading}
        />
    </>
    )
}
const mapStateToProps = state => ({
    brands: state.brands,
  })

const mapDispatchToProps = dispatch => ({
    onCreateBrand: brand => dispatch(createBrand(brand)),
    onOpenToast: toast => dispatch(openToast(toast)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageBrandForm);