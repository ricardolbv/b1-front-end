import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Toast from '../../common/Toast';
import { Button } from '@material-ui/core';

const HomeDisplay = () => {
    //Message status
    const [toast, setToast] = useState(false);
    const [status, setStatus] = useState("success");
    const [message, setMessage] = useState("");

    const handleClose = () => setToast(false);
    return (
        <Box display='flex' justifyContent='center' p={3} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
            <Typography variant='h2' textAlign='center'> Pagina Inicial </Typography>
            <BuildIcon />
            <div>
                <Button variant='contained' onClick={() => {
                    setToast(true) 
                    setMessage('Aviso: Mensagem de Aviso...') 
                    setStatus("warning")         
                }}> Toast de Aviso 
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
            <Toast status={status} message={message} open={toast} handleClose={handleClose}/>
       </Paper>
       </Box>
    )
}

export default HomeDisplay;