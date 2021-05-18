import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const FormRetail = () => {
    return (
        <Box display='flex' justifyContent='center' p={3} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'100%' }}>
            <Box p={2} paddingLeft={1}>
                <Typography variant='h3'> Novo varejo</Typography>
                <Divider style={{ padding: '1px' }}/>
            </Box>
            <Divider />
            <Grid container spacing={1}>
                <Grid item sm={6}>
                    <Box p={1}>
                    <TextField id="email" label="E-mail" variant="outlined"  />
                    </Box>
                    <Box p={1}>
                    <TextField id="email" label="E-mail" variant="outlined"  />
                    </Box>
                    <Box p={1}>
                    <TextField id="email" label="E-mail" variant="outlined"  />
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Typography align="center">
                        <TextField id="email" label="E-mail" variant="outlined"  />
                    </Typography>
                </Grid>
            </Grid>
       </Paper>
       </Box>
    )
}

export default FormRetail;