import React from 'react';
import Grid from '@material-ui/core/Grid'
import SideMenu from './SideMenu';
import AppB1Bar from './AppB1Bar';


const HomePage = () => {
        return (
        <Grid container spacing={0} >
          <Grid item sm={2} xs={2} md={2} xl={2}>
                  <SideMenu />
          </Grid>
          <Grid item sm={10} xs={10} md={10} xl={10}>
             <AppB1Bar />
             <div> pagina inicial </div>
          </Grid>
        </Grid>
        )
}


export default HomePage;