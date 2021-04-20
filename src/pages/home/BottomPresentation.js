import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
    Root: {
       position: 'absolute',
       bottom: '0',
       left: '5vh',
    },
    Text: {

    }
})

const BottomPresentation = () => {
    const classes = useStyle();
        return (
            <Box display="flex" justifyContent="center" alignItems='center' m={1} p={1} className={ classes.Root } >
                <Box p={1}>
                    <Typography variant='subtitle2' style={{ color: "white"}} > Copyright 2021 </Typography>
                </Box>
            </Box>
        )
}


export default BottomPresentation;