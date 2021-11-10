import React, { useState, } from 'react'
import { connect } from 'react-redux'
import NewCampaignForm from './NewCampaignForm'
import { useHistory } from 'react-router-dom';

import { newCampaign, newFile } from './thunks'

export const ManageCampaingForm = (props) => {
    const history = useHistory();
    const [activeStep, setActiveStep] = useState(0);
    const [file, setFile] = useState()

    const [campaign, setCampaign] = useState({
        'produto': '',
        'id_campanha': '',
        'marca': '',
        'descricao': '',
        'dataCriacao': Date.now(),
    });

    const [date, setData] = useState(new Date());
    const [loading, setLoad] = useState(false);

    const [prodValidation, setProdValid] = useState(false);
    const [idCampanhaValidation, setIdValid] = useState(false);
    const [marcaValidation, setMarcaValid] = useState(false);
    const [descricaoValidation, setDescricaoValid] = useState(false);
    const [dataValidation, setDataValid] = useState(false);

    const setValidationsToFalse = () => {
        setProdValid(false);
        setIdValid(false);
        setMarcaValid(false);
        setDescricaoValid(false);
        setDataValid(false);
    }

    const handleUploadFile = async () => {
        setLoad(true);
        await props.onUploadFile(file);
        setLoad(false);
        history.push('/home/campaign')
    }

    const handleFile = ({ target }) => setFile(target.files[0])


    function handleChange ({ target }) {
        setValidationsToFalse();
        setCampaign({
            ...campaign,
            [ target.id ]: target.value,
        })
    }

    const handleSubmit = async (target) => {
        campaign.dataCriacao = date.toLocaleDateString();
        if (prodIsValidated() && idIsValidated() && marcaIsValidated() &&
            descricaoIsValidated() && dataIsValidated()){
                setLoad(true);
                await props.onCreateCampaign(campaign);
                setActiveStep(1);
                setLoad(false);
        }
    }

    /** Validações */
    const prodIsValidated = () => {
        if(campaign.produto === '' ){
            setProdValid(true);
            return false;
        }
        if(campaign.produto.length <= 3){
            setProdValid(true);
            return false;
        }
        return true;
    }

    const idIsValidated = () => {
        if(campaign.id_campanha === '' ){
            setIdValid(true);
            return false;
        }
        return true;
    }

    const marcaIsValidated = () => {
        if(campaign.marca === '' ){
            setMarcaValid(true);
            return false;
        }
        return true;
    }

    const descricaoIsValidated = () => {
        if(campaign.descricao === '' ){
            setDescricaoValid(true);
            return false;
        }
        return true;
    }

    const dataIsValidated = () => {
        if(campaign.data === ''){
            setDataValid(true);
            return false;
        }
        return true
    }

    function handleChangeSelect ({ target }) {
        setCampaign({
            ...campaign,
            marca: target.value,
        })
    }

    
        return (
            <>
                <NewCampaignForm campaign={campaign}
                                 onSubmit={handleSubmit}
                                 onChange={handleChange}
                                 onSelect={handleChangeSelect}
                                 onDataChange={setData}
                                 onUploadFile={handleUploadFile}
                                 handleFile={handleFile}
                                 file={file}
                                 step={activeStep}
                                 date={date}
                                 isLoading={loading}
                                 prodValidation={prodValidation}
                                 idCampanhaValidation={idCampanhaValidation}
                                 marcaValidation={marcaValidation}
                                 descricaoValidation={descricaoValidation}
                                 dataValidation={dataValidation}/>   
            </>
        )
}


const mapDispatchToProps = dispatch => ({
    onCreateCampaign: campaign => dispatch(newCampaign(campaign)),
    onUploadFile: file => dispatch(newFile(file))
})

export default connect(null, mapDispatchToProps)(ManageCampaingForm)
