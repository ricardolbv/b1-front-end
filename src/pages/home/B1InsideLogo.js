import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../imgs/B1_BRANCO.png';
import Box from '@material-ui/core/Box';


const useStyle = makeStyles({
    Img: {
        height: '80px',
        width: '165px',
        paddingLeft: '2vh'
    }
})

function B1InsideLogo() {
    const classes = useStyle();
    return (
        <Box p={3}>
            <img src={logo} className={classes.Img} alt=""/>
        </Box>
    )
}

export default B1InsideLogo;