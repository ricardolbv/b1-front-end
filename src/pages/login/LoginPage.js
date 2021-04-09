import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormLogin from './FormLogin';
import B1logo from './B1Logo';

const useStyle = makeStyles({
    Above: {
        backgroundColor: "#0D0B23",
        height: '50vh'
    },
    Under: {
        backgroundColor: "#ffffff",
        height: '50vh'
    }
})



function LoginPage() {
    const classes = useStyle();
    return (
        <>
        <Grid container direction="column" spacing={0}>
          <Grid item sm={12} xs={12} >
            <Typography component="div" className={classes.Above} />
            <B1logo />
            <FormLogin />
          </Grid>
          <Grid item sm={12} xs={12} >
            <Typography component="div" className={classes.Under} />
          </Grid>
        </Grid>
        </>
    )
}

export default LoginPage;