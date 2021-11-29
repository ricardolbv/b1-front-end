import React, { useState, } from 'react'
import { connect } from 'react-redux'
import NewCampaignForm from './NewCampaignForm'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { actualizationCampaign, newFile } from './thunks'

export const ManageCampaingFormEdit = (props) => {
    const history = useHistory();
    const [activeStep, setActiveStep] = useState(0);

    const campaigns = useSelector(state => state.campaigns);
    let {id} = useParams();

    const [_campaign] = campaigns.filter(item => item.id == id);

    const [file, setFile] = useState()

     function fileNameSplit (fileName, id_campanha){
        const [first, second] = fileName.split('.');
        return first+"-"+id_campanha+"."+second;
    }

    const [campaign, setCampaign] = useState({
        'id': id,
        'produto': _campaign.campanha,
        'id_campanha': 'xxxxx',
        'marca': _campaign.id_marca,
        'descricao': _campaign.descricao,
        'dataCriacao': _campaign.data_de_fim,
    });

    const [date, setData] = useState(new Date());
    const [loading, setLoad] = useState(false);

    const [prodValidation, setProdValid] = useState(false);
    const [idCampanhaValidation, setIdValid] = useState(false);
    const [marcaValidation, setMarcaValid] = useState(false);
    const [descricaoValidation, setDescricaoValid] = useState(false);
    const [dataValidation, setDataValid] = useState(false);

    const setValidationsToFalse = () => {;
        setProdValid(false);
        setIdValid(false);
        setMarcaValid(false);
        setDescricaoValid(false);
        setDataValid(false);
    }

    const handleUploadFile = async () => {
        setLoad(true);
        const tst = fileNameSplit(file.name, id)
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
        if (prodIsValidated() && idIsValidated() && marcaIsValidated() &&
            descricaoIsValidated() && dataIsValidated()){
                setLoad(true);
                await props.onUpdateCampaign(campaign);
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
                <NewCampaignForm 
                                 type={"Editar"}
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
                                 idCampanhaValidation={idCampanhaValidation}
                                 marcaValidation={marcaValidation}
                                 descricaoValidation={descricaoValidation}
                                 dataValidation={dataValidation}/>   
            </>
        )
}

const mapDispatchToProps = dispatch => ({
    onUpdateCampaign: campaign => dispatch(actualizationCampaign(campaign)),
    onUploadFile: (file, fileName) => dispatch(newFile(file, fileName))
})

export default connect(null, mapDispatchToProps)(ManageCampaingFormEdit)
