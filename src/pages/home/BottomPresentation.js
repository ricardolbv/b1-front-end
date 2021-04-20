import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
    Root: {
       position: 'fixed',
       bottom: 0,
       paddingLeft: '9vh',
    },
    Text: {

    }
})

const BottomPresentation = () => {
    const classes = useStyle();
        return (
                <Box p={3}  textAlign='center' alignItems='center' justify='center' className={ classes.Root }>
                    <Typography variant='subtitle2' style={{ color: "white"}} textAlign='center'> Copyright 2021 </Typography>
                </Box>
        )
}


export default BottomPresentation;