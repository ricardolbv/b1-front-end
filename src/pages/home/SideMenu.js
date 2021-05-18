import React from 'react';
import Grid from '@material-ui/core/Grid';
import B1InsideLogo from './B1InsideLogo';
import TabOptions from './TabOptions';
import BottomPresentation from './BottomPresentation';


const SideMenu = () => {
    return (
        <Grid wrap='wrap' container direction="column" spacing={0} style={{backgroundColor: '#0D0B23', height:'100%'}}>
            <Grid item xs={2} >
               <B1InsideLogo />
            </Grid>
            <Grid item xs={9} >
              <TabOptions />
            </Grid>
            <Grid item xs={1} >
                <BottomPresentation />
            </Grid>
        </Grid>
    )
}

export default SideMenu;