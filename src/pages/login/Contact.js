import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyle = makeStyles({
    Box: {
       backgroundColor: "white"
    },
    GreyText: {
        color: "#9B9B9B",
        font: "Roboto"
    },
    Button: {
        margin: '6px'
    }
})

function Contact() {
    const classes = useStyle();
    return (
        <Box color="grey" className={classes.Box} m={4}>
            <Typography className={classes.GreyText} variant='h6'> We can help </Typography>
            <Typography variant='h4'> Your business grow </Typography>
            <Typography variant='h4'> efficiently! </Typography>
            <Button variant="contained" className={classes.Button}>Contact us</Button>
        </Box>
    )
}

export default Contact;