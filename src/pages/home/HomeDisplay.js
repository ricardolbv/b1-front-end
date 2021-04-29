import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Container from '@material-ui/core/Container';
import Toast from '../../common/Toast';
import { Button } from '@material-ui/core';

const HomeDisplay = () => {
    //Message status
    const [toast, setToast] = useState(false);
    const [status, setStatus] = useState("success");
    const [message, setMessage] = useState("");

    const handleClose = () => setToast(false);
    return (
        <Container>
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
       </Container>
    )
}

export default HomeDisplay;