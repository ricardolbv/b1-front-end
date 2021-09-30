import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';


export default function Loading(props) {
    return (
        <>
        { props.isLoading ?                 
            <Box sx={{ width: '80%' }}>
                <LinearProgress />
            </Box> :
            <></>
        }
            
        </>
    )
}
