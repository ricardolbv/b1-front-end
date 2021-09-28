import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'

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

function FormLogin(props) {
    const classes = useStyle();
    return (
        <Box boxShadow={4} className={classes.Form}>
        <Paper elevation={2} className={classes.Form} >
            <form>
                <Typography className={classes.PrimaryColor} variant='h5' align="center">Bem vindo!</Typography>
                <Typography variant='subtitle1' align="center" className={classes.GreyText}>Faça seu login</Typography>
                <Typography align="center">
                    <TextField id="email" 
                               label="E-mail" 
                               variant="outlined" className={classes.Input}
                               value={props.user.email}
                               onChange={props.onChange}
                               error={props.mailValidation}
                               {...(props.mailValidation && { helperText: 'Email inválido' })}/>
                </Typography>
                <Typography align="center">
                <TextField id="senha" 
                           label="Digite sua senha" 
                           variant="outlined" className={classes.Input} 
                           type='password'
                           value={props.user.senha}
                           onChange={props.onChange}
                           error={props.pswValidation}
                           {...(props.pswValidation && { helperText: 'Poucos caracteres' })}
                           />
                </Typography>
                <a href="https://material-ui.com/api/text-field/">
                <Typography align="right" className={classes.Forgot}>
                    Esqueceu a senha?
                </Typography>
                </a>
                <Typography align="center">
                <Button variant="contained" 
                        color="primary" className={classes.Btn}
                        onClick={props.onSubmit}>
                    Entre
                </Button>
                </Typography>
            </form>
        </Paper>
        </Box>
    )
}

export default FormLogin;