import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 230,
      minHeight: 200,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  function CardCampaign(props) {
    const classes = useStyles();
    const history = useHistory();

    const formatDate = (created, until) => {
      const [dateCreated, ] = created.split('T');
      const [dateUntil, ] = until.split('T');

      const [yearCreated, mouthCreated, dayCreated ] = dateCreated.split('-');
      const [yearUntil, mouthUntil, dayUntil] = dateUntil.split('-');

      return "Criado em "+dayCreated+"/"+mouthCreated+"/"+yearCreated+
             " até "+dayUntil+"/"+mouthUntil+"/"+yearUntil
    }
  
    return (
      <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom align='center'>
            {props.nomeCampanha}
          </Typography>
          <Typography variant="h6" component="h2" align='center'>
            {props.nomeMarca}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {formatDate(props.dataCriacao, props.dataFim)}
          </Typography>
          <Typography variant="body2">
           {props.descricao}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={() => history.push(`/home/campaign/edit/${props.id_campanha}`)}>Mais infos</Button>
          <Button size="small" onClick={() => 
          { props.textoDialogo(props.nomeCampanha)
            props.dialogo(true)
            props.onDelete(props.id_campanha)
          }}>Excluir</Button>
        </CardActions>
      </Card>
      </>
    );
  }

  export default CardCampaign;
  