import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormLogin from './FormLogin';
import B1logo from './B1Logo';
import Contact from './Contact';
import SideImage from './SideImage';

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
            <SideImage />
          </Grid>
          <Grid item container sm={12} xs={12} >
            <Grid item sm={8} xs={8}>
              <Typography component="div" className={classes.Under} />
            </Grid>
            <Grid item sm={4} xs={4}>
                <Contact />
            </Grid>
          </Grid>
        </Grid>
        </>
    )
}

export default LoginPage;