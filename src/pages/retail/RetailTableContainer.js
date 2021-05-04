import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import RetailTable from './RetailTable';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    Btn: {
        backgroundColor: "#0D0B23",
        borderLeft: '15px'
    }
})

const RetailTableContainer = () => {
    const classes = useStyle();
    return (
        <Box display='flex' justifyContent='center' p={3}>
            <Paper elevation={3} style={{ width: '100%', height:'80vh' }}>
                <Box p={1} paddingLeft={3}>
                    <Typography variant='h3'> Varejo</Typography>
                    <Box display='flex' justifyContent='center' p={0}  >
                        <Paper elevation={2} style={{ width:'60%' }}>
                            <InputBase 
                            placeholder='Procurar por nome ou código ...'
                            style={{ width: '90%', padding:'5px' }}>
                            </InputBase>
                            <IconButton type="submit" aria-label="search" style={{ right:'1px', position:'' }}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        <Box paddingLeft={3}>
                            <Button className={classes.Btn} variant="contained" color="primary"> + Novo varejo </Button>
                        </Box>
                    </Box>
                    <Box p={1}>
                    <RetailTable />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default RetailTableContainer;