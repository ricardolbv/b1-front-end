import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import side from '../../imgs/Login-img.png';


const useStyle = makeStyles({
    Img: {
        position: "fixed",
        top: "25%",
        right: "70%",
        width: "375px",
        height: "500px",
    }
})

function SideImage() {
    const classes = useStyle();
    return (
        <img src={side} className={classes.Img} alt=""/>
    )
}

export default SideImage;