import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardCampaign from './CardCampaign';

const existedCampaigns = [
    { nomeCampanha: 'Nike tênis tal 375', nomeMarca: 'Nike', dataCriacao: '25/08/2021', descricao: 'Campanha criada com o objetivo de aumentar o alcance' },
    { nomeCampanha: 'Adidas 375', nomeMarca: 'Adidas', dataCriacao: '22/05/2021', descricao: 'Campanha criada com o objetivo de aumentar o alcance' },
    { nomeCampanha: 'Nike tênis tal 370', nomeMarca: 'Nike', dataCriacao: '20/06/2021', descricao: 'Campanha criada com o objetivo de aumentar o alcance' },
    { nomeCampanha: 'Cacau show Barra1', nomeMarca: 'CacauShow', dataCriacao: '09/04/2021', descricao: 'Campanha criada com o objetivo de aumentar o alcance' },
    { nomeCampanha: 'Cacau show Barra2', nomeMarca: 'CacauShow', dataCriacao: '25/08/2021', descricao: 'Campanha criada com o objetivo de aumentar o alcance' },
]

function CardTable(props){
    return (
        <Grid container direction='row' spacing={1}>
            { existedCampaigns.filter((val) => {
            if (props.searchTerm === '')
                return val
            else if (val.nomeCampanha.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
                     val.nomeMarca.toLowerCase().includes(props.searchTerm.toLowerCase()))
            return val
        }).map(item => 
                <Grid item sm={3}>
                    <CardCampaign 
                        nomeCampanha={item.nomeCampanha}
                        nomeMarca={item.nomeMarca}
                        dataCriacao={item.dataCriacao}
                        descricao={item.descricao}/>
                </Grid>
            )}
        </Grid>
    )
}

export default CardTable;