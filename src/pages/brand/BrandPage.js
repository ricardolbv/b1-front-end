import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const BrandPage = () => {
    return (
        <Box display='flex' justifyContent='center' p={3} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
            <Typography variant='h2' textAlign='center'> Pagina Marca </Typography>
            <BuildIcon />
       </Paper>
       </Box>
    )
}

export default BrandPage;