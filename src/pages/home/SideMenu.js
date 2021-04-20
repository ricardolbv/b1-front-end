import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import B1InsideLogo from './B1InsideLogo';
import TabOptions from './TabOptions';
import BottomPresentation from './BottomPresentation';
import Box from '@material-ui/core/Box';


const SideMenu = () => {
    return (
      <Container disableGutters maxWidth='false'  style={{backgroundColor: '#0D0B23', height: "100vh" }}>
        <Grid container direction="column" spacing={0} >
            <Grid item xs={3}  >
               <B1InsideLogo />
            </Grid>
            <Grid item xs={7} >
              <TabOptions />
            </Grid>
            <Grid item xs={2}>
            <BottomPresentation />
            </Grid>
        </Grid>
      </Container>
    )
}

export default SideMenu;