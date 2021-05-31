import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const useStyle = makeStyles({
    Root: {
       position: 'fixed',
       bottom: '2%',
       paddingLeft: '5%',
       padding: '0.1%'
    },
    Text: {
        color: "white"
    }
})

const BottomPresentation = () => {
    const classes = useStyle();
        return (
            <>
                <div style={{ width: '16.6%',borderTop: '0.01em groove grey',  position: 'fixed',bottom: '6%'}}></div>
                <Container className={ classes.Root } maxWidth='xs' >
                    <Typography variant='subtitle2' className={classes.Text} textAlign='center'> @Copyright 2021 </Typography>
                </Container>
            </>
        )
}


export default BottomPresentation;