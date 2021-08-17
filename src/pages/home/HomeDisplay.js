import { useState } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Toast from '../../common/Toast';
import { Button } from '@material-ui/core';
import { openToast } from '../../common/actions';

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
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
            <Typography variant='h2' textAlign='center'> Pagina Inicial </Typography>
            <BuildIcon />
            <div>
                <Button variant='contained' onClick={handleClick}> Toast de Aviso 
                </Button>
                <Button variant='contained' onClick={() => {
                    setToast(true) 
                    setMessage('Aviso: Mensagem de Erro...') 
                    setStatus("error")         
                }}> Toast de Erro 
                </Button>
                <Button variant='contained' onClick={() => {
                    setToast(true) 
                    setMessage('Aviso: Mensagem de Sucesso...') 
                    setStatus("success")         
                }}> Toast de Sucesso 
                </Button>
               
            </div>
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