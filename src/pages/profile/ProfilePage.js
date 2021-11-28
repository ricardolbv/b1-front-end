import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Paper';
import Loading from '../../common/Loading';
import ManageProfileInfos from './ManageProfileInfos'

export default function ProfilePage() {
    const [isLoading, setLoading] = useState(false);
    return (
        <Box boxShadow={5} m={2} p={2}>
        <Box p={1} paddingLeft={3}>
            <Grid container spacing={1}>
                    <Grid item xs={5}>
                        <Typography variant='h3'> Meu perfil </Typography>
                    </Grid>
                    <Grid item xs={2}>
                            <Box paddingTop={3}>
                                <Loading isLoading={isLoading}/>
                            </Box>
                        </Grid>
                    <Grid item xs={5} />
            </Grid>
            <Divider style={{ padding: '1px' }}/>
            <Grid container direction='row'>
            <Grid item xs={2}/>
                <Grid item xs={8}>
                    <Box display='flex' justifyContent='center' p={1}>
                        <ManageProfileInfos setLoading={setLoading}/>
                    </Box>
                </Grid>
            <Grid item xs={2}/>
            </Grid>
        </Box>
        </Box>

    )
}