import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 230,
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
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom align='center'>
            {props.nomeCampanha}
          </Typography>
          <Typography variant="h6" component="h2" align='center'>
            {props.nomeMarca}
          </Typography>
          <Typography color="textSecondary">
            {props.dataCriacao}
          </Typography>
          <Typography variant="body2">
           {props.descricao}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">Mais infos</Button>
          <Button size="small">Excluir</Button>
        </CardActions>
      </Card>
    );
  }

  export default CardCampaign;
  