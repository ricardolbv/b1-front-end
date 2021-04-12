import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyle = makeStyles({
    Form: {
        position: "fixed",
        maxHeight: "565px",
        maxWidth: "550px",
        minWidth:"385px",
        minHeight: "450px",
        top: "30%",
        left: "50%",
        marginTop: "-50px",
        marginLeft: "-205px",
    },
    PrimaryColor: {
        color: "#0D0B23",
        margin: "10px",
        marginTop: "45px",
    },
    GreyText: {
        color: "#9B9B9B",
        font: "Roboto",
        marginTop: "45px",
    },
})

function FormLogin() {
    const classes = useStyle();
    return (
        <Paper elevation={3} className={classes.Form} >
            <form>
                <Typography className={classes.PrimaryColor} variant='h5' align="center">Bem vindo!</Typography>
                <Typography variant='subtitle1' align="center" className={classes.GreyText}>Faça seu login</Typography>
            </form>
        </Paper>
    )
}

export default FormLogin;