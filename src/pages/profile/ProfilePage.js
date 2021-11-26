import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Paper';

import ProfileInfos from './ProfileInfos';

export default function ProfilePage() {
    return (
        <Box boxShadow={5} m={2} p={2}>
        <Box p={1} paddingLeft={3}>
            <Typography variant='h3'> Meu perfil </Typography>
            <Divider style={{ padding: '1px' }}/>
            <Grid container direction='row'>
            <Grid item xs={2}/>
                <Grid item xs={8}>
                    <Box display='flex' justifyContent='center' p={1}>
                        <ProfileInfos />
                    </Box>
                </Grid>
            <Grid item xs={2}/>
            </Grid>
        </Box>
        </Box>

    )
}