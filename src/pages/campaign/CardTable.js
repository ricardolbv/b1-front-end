import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardCampaign from './CardCampaign';
import { connect } from 'react-redux';
import { fetchCampaigns } from './thunks';

import { useUser } from '../../auth/useUser';

function CardTable(props){
    const user = useUser();
    const { usuarioId, cargoId, email } = user;

    useEffect(() => {
        props.campaignsLoad(usuarioId);
      }, [])

    return (
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
                        descricao={item.descricao}/>
                </Grid>
            )}
        </Grid>
    )
}

const mapStateToProps = state => ({
    campaigns: state.campaigns,
  })
  
  const mapDispatchToProps = dispatch => ({
    campaignsLoad: id => dispatch(fetchCampaigns(id)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);