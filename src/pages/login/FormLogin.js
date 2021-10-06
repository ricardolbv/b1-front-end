import { React, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import Loading from '../../common/Loading';
import { PowerInputSharp } from '@material-ui/icons';


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
                <Loading isLoading={props.isLoading}/>
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
                <Typography align="center" style={{ paddingTop: '3px' }}>
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
                <Box p={2} m={1} paddingRight={5} display='flex' justifyContent='flex-end'>
                    <Link variant='body1' onClick={() => props.onChangePage(2)}>Esqueceu a senha? </Link>
                </Box>

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