import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../imgs/B1_BRANCO.png';
import Container from '@material-ui/core/Container';


const useStyle = makeStyles({
    Img: {
        position: 'fixed',
        height: '80px',
        width: '165px',
    },
    Container: {
        padding: '3vh',
        paddingLeft: '5vh',
    }
})

function B1InsideLogo() {
    const classes = useStyle();
    return (
        <Container maxWidth='sm' className={classes.Container}>
            <img src={logo} className={classes.Img} alt=""/>
        </Container>
    )
}

export default B1InsideLogo;