import { useState } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Toast from '../../common/Toast';
import { Button } from '@material-ui/core';
import { openToast } from '../../common/actions';
import HomeJoao from './HomeJoao';

const HomeDisplay = (props) => {
    //Message status
    const [toast, setToast] = useState({open: true, status: 'warning', message: 'Aviso: Mensagem de Aviso...'});
    const [status, setStatus] = useState("success");
    const [message, setMessage] = useState("");

    const handleClick = () => { 
        props.onOpenToast(toast);
    }

    const handleClose = () => setToast(false);
    return (
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
        <Typography variant='h3' align='center'> BUSINESS ONE </Typography> <br/><br/>
        <Grid container spacing={3} align="center" justify="center">
        <Grid item xs={3} >
        <Card>
                    <CardMedia
                    component="img"
                    
                    height="300"
                    image="https://www.socialbakers.com/website/storage/2020/01/OG-BLOG_data.jpg"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Por quê?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Ajudar Varejos e Marcas a fornecerem/interpretarem seus resultados/impactos com campanhas contratadas.
                    </Typography>
                    </CardContent>
                </Card>
        </Grid>
        <Grid item xs={3} >
        <Card>
                    <CardMedia
                    component="img"
                    
                    height="300"
                    image="https://cdn.buttercms.com/qZu81OW0TwGL9mPvDHYs"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Como?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Extraindo os dados de campanhas paid media de nossos clientes e criando relatórios personalizados e modernos.
                    </Typography>
                    </CardContent>
                </Card>
        </Grid>
        <Grid item xs={3} >
        <Card>
                    <CardMedia
                    component="img"
                    
                    height="300"
                    image="https://www.fiveacts.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/09/data-analytics-o-que-e-tipos-como-usar-nas-organizacoes.jpg.webp"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        O quê?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     Aplicativo Web para Varejo e Marcas, possibilitando relatórios analíticos para tomada de decisão data-driven.                     
                    </Typography>
                    </CardContent>
                </Card>
        </Grid>
      </Grid> 
      <br/><br/>
      <Typography variant='h6' align='center'> "Pelo terceiro ano consecutivo, o investimento em dados e iniciativas de IA tem sido quase universal,
       com 99,0% das empresas relatando investimento em dados e IA."  </Typography>
       <Typography variant='h5' align='center'>- Harvard Business Review  </Typography>
      
                
            
            <Toast />
       </Paper>
       
       </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    onOpenToast: toast => dispatch(openToast(toast)),
})

export default connect(null, mapDispatchToProps)(HomeDisplay);
//export default connect(mapStateToProps, mapDispatchToProps)(RetailTable);