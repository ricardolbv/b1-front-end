import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../imgs/B1.jpg';


const useStyle = makeStyles({
    Img: {
        position: "fixed",
        maxHeight: "100px",
        maxWidth: "100px",
        minWidth:"285px",
        minHeight: "100px",
        top: "35%",
        left: "50%",
        marginTop: "-200px",
        marginLeft: "-160px",
    }
})

function B1logo() {
    const classes = useStyle();
    return (
        <img src={logo} className={classes.Img}/>
    )
}

export default B1logo;