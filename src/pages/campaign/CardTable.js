import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CardCampaign from './CardCampaign';
import { connect } from 'react-redux';
import { fetchCampaigns } from './thunks';
import { useUser } from '../../auth/useUser';

import DeleteAlertCampaign from './DeletCampaignAlert'; 

function CardTable(props){
    const [dialog, openDialog] = useState(false);
    const [dialogText, setDialogText] = useState('');
    const user = useUser();
    const { usuarioId, cargoId, email } = user;
    
    const handleCloseDialog = () => openDialog(false);

    const handleExclude = () => openDialog(false);

    useEffect(() => {
        props.campaignsLoad(usuarioId);
      }, [])

    return (
        <>
        <DeleteAlertCampaign openDialog={dialog} handleCloseDialog={handleCloseDialog} handleExclude={handleExclude}
                             campanha={dialogText}/>
        <Grid container direction='row' spacing={1}>
            { props.campaigns.filter((val) => {
            if (props.searchTerm === '')
                return val
            else if (val.campanha.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
                     val.nome_marca.toLowerCase().includes(props.searchTerm.toLowerCase()))
            return val
        }).map(item => 
                <Grid item sm={3}>
                    <CardCampaign 
                        nomeCampanha={item.campanha}
                        nomeMarca={item.nome_marca}
                        dataFim={item.data_de_fim}
                        dataCriacao={item.data_de_inicio}
                        descricao={item.descricao}
                        dialogo={openDialog}
                        textoDialogo={setDialogText}/>
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
  })

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);