import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyle = makeStyles({
    Form: {
        position: "fixed",
        maxHeight: "565px",
        maxWidth: "550px",
        minWidth:"385px",
        minHeight: "450px",
        top: "30%",
        left: "50%",
        marginTop: "-35px",
        marginLeft: "-205px",
    },
    PrimaryColor: {
        color: "#0D0B23",
        margin: "10px",
        marginTop: "35px",
    },
    GreyText: {
        color: "#9B9B9B",
        font: "Roboto",
        marginTop: "20px",
    },
    Input :{
        width: '300px',
        height: '40px',
        marginTop: '35px',
    },
    Forgot :{
        marginTop: '30px',
        marginRight: "40px"
    },
    Btn: {
        backgroundColor: "#0D0B23",
        width: '300px',
        height: '40px',
        marginTop: '35px',
    }
})

function Form(props){
    const classes = useStyle();
    return (
        <>
        <Typography className={classes.PrimaryColor} variant='h5' align="center">Recuperando senha!</Typography>
                    <Typography  variant='body1' align="center"> Enviaremos as instruções via email</Typography>
                    <Box p={2} m={3}>
                        <TextField label='Email' fullWidth variant='outlined'/>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                    <Button variant="contained" 
                        color="primary" className={classes.Btn}
                        onClick={() => props.onSend(true)}>
                            Enviar
                    </Button>
                    </Box>
        </>
    )
}

function SuccessMessage(){
    return (
        <>
            <Box p={2} m={3}>
                <Typography variant='h5'> Sucesso! </Typography>
                <Typography variant='body1'> Instruções foram enviadas ao email </Typography>
            </Box>
        </>
    )
}

export default function FormRecoveryPsw(props) {
    const [send, setSend] = useState(false);
    const classes = useStyle();

    return (
        <Box boxShadow={4} className={classes.Form}>
            <Paper elevation={2} className={classes.Form} >
                <form>
                    <Box p={1} display='flex' justifyContent='flex-end'>
                        <Button onClick={() => props.onChangePage(1)}>
                            Voltar
                        </Button>
                    </Box>
                    {send === false? <Form onSend={setSend}/> : <SuccessMessage />}
                </form>
            </Paper>
        </Box>
    )
}
