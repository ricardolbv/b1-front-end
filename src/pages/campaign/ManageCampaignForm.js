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

    function fileNameSplit (fileName, id_campanha){
        const [first, second] = fileName.split('.');
        return first+"_"+id_campanha+"."+second;
    }

    const [date, setData] = useState(new Date());
    const [loading, setLoad] = useState(false);

    const [prodValidation, setProdValid] = useState(false);
    const [marcaValidation, setMarcaValid] = useState(false);
    const [descricaoValidation, setDescricaoValid] = useState(false);
    const [dataValidation, setDataValid] = useState(false);

    const setValidationsToFalse = () => {
        setProdValid(false);
        setMarcaValid(false);
        setDescricaoValid(false);
        setDataValid(false);
    }

    const handleUploadFile = async () => {
        setLoad(true);
        const tst = fileNameSplit(file.name, props.campaign_id)
        await props.onUploadFile(file, tst);
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

    const handleSubmit = async () => {
        campaign.dataCriacao = date.toLocaleDateString();
        if (prodIsValidated() && marcaIsValidated() &&
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
                <NewCampaignForm 
                                 type={"Nova"}
                                 campaign={campaign}
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
                                 marcaValidation={marcaValidation}
                                 descricaoValidation={descricaoValidation}
                                 dataValidation={dataValidation}/>   
            </>
        )
}

const mapStateToProps = state => ({
    campaign_id: state.campaign_id
  })

const mapDispatchToProps = dispatch => ({
    onCreateCampaign: campaign => dispatch(newCampaign(campaign)),
    onUploadFile: (file, fileName) => dispatch(newFile(file, fileName))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageCampaingForm)
