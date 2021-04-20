import React from 'react';
import Grid from '@material-ui/core/Grid';
import B1InsideLogo from './B1InsideLogo';
import TabOptions from './TabOptions';
import BottomPresentation from './BottomPresentation';


const SideMenu = () => {
    return (
        <Grid wrap='wrap' container direction="column" spacing={0} style={{backgroundColor: '#0D0B23', height:'100vh'}}>
            <Grid item xs={3}  lg={3}>
               <B1InsideLogo />
            </Grid>
            <Grid item xs={9} lg={9}>
              <TabOptions />
              <BottomPresentation />
            </Grid>
        </Grid>
    )
}

export default SideMenu;