import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardCampaign from './CardCampaign';
import { connect } from 'react-redux';
import { fetchCampaigns, deleteCampaign } from './thunks';
import { useUser } from '../../auth/useUser';

import DeleteAlertCampaign from './DeletCampaignAlert'; 

function CardTable(props){
    const [dialog, openDialog] = useState(false);
    const [dialogText, setDialogText] = useState('');
    const [campaignToDelete, setCampaignDelete] = useState('');

    const user = useUser();
    const { usuarioId, cargoId, email } = user;
    
    const handleCloseDialog = () => openDialog(false);
    const onDelete = () => {
        props.onDeleteCampaign(campaignToDelete);
        openDialog(false)
    }

    useEffect(() => {
        props.campaignsLoad(usuarioId);
      }, [])

    return (
        <>
        <DeleteAlertCampaign openDialog={dialog} handleCloseDialog={handleCloseDialog} handleExclude={onDelete}
                             campanha={dialogText}/>
        <Grid container direction='row' spacing={1}>
            { props.campaigns.length === 0 ?
                <Box display='flex' justifyContent='center' style={{ marginLeft: '40%', marginTop: '5%'}}>
                    <Typography variant='h6'> Ainda sem campanhas! </Typography>
                </Box> :
            props.campaigns.filter((val) => {
            if (props.searchTerm === '')
                return val
            else if (val.campanha.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
                     val.nome_marca.toLowerCase().includes(props.searchTerm.toLowerCase()))
            return val
        }).map(item => 
                <Grid item sm={3}>
                    <CardCampaign
                        id_campanha={item.id} 
                        nomeCampanha={item.campanha}
                        nomeMarca={item.nome_marca}
                        dataFim={item.data_de_fim}
                        dataCriacao={item.data_de_inicio}
                        descricao={item.descricao}
                        dialogo={openDialog}
                        textoDialogo={setDialogText}
                        onDelete={setCampaignDelete}/>
                </Grid>
            )}
        </Grid>
        </>
    )
}

const mapStateToProps = state => ({
    campaigns: state.campaigns,
  })
  
  const mapDispatchToProps = dispatch => ({
    campaignsLoad: id => dispatch(fetchCampaigns(id)),
    onDeleteCampaign: id => dispatch(deleteCampaign(id))
  })

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);