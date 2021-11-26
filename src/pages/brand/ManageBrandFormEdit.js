import { React, useState } from 'react';
import FormBrand from './FormBrand';
import { connect } from 'react-redux';
import { changeBrand } from './thunks';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';

function ManageBrandFormEdit (props)  {
    const history = useHistory();
    const brands = useSelector(state => state.brands);
    let {id} = useParams();
    const [_brand] = brands.filter(item => item.email == id);

    const [isLoading, setLoading] = useState(false);
    const [mailValidation, setMailValid] = useState(false);
    const [pswValidation, setPwsValid] = useState(false);
    const [cnpjValidation, setCnpjValid] = useState(false);
    const [nomeValidation, setNomeValid] = useState(false)
    const [retailValidation, setRetailValid] = useState(false)
    const [segmentoValidation, setSegValid] = useState(false);
    const [brand, setBrand] = useState({
        email: _brand.email,
        senha: _brand.senha,
        nome: _brand.nome,
        cnpj: _brand.cnpj,
        segmento: _brand.id_segmento,
        varejo_responsavel: _brand.id_varejo,
        status: 1,
        telefone: _brand.telefone
    });
 
    const handleSubmit = async () => {
        if (mailIsValidated() && pswIsValid() &&
            nomeIsValid() && retailIsValidated()&&
            segmentoIsValidated()){

        setLoading(true);
        await props.onEditBrand(brand);
        setLoading(false);

        history.push("/home/brand");
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
        <FormBrand brand ={brand}
                    type={"Editando marca"} 
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

const mapDispatchToProps = dispatch => ({
    onEditBrand: brand => dispatch(changeBrand(brand))
})

export default connect(null, mapDispatchToProps)(ManageBrandFormEdit);