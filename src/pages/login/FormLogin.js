import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


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
    }
})

function FormLogin() {
    const classes = useStyle();
    return (
        <>
        <Paper elevation={3} className={classes.Form} />
        </>
    )
}

export default FormLogin;