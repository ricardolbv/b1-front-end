import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../imgs/B1_BRANCO.png';


const useStyle = makeStyles({
    Img: {
        position: "fixed",
        width: '15%',
        height: '12%',
        top: "7%",
        left: "42%",
    }
})

function B1logo() {
    const classes = useStyle();
    return (
        <img src={logo} className={classes.Img} alt=""/>
    )
}

export default B1logo;