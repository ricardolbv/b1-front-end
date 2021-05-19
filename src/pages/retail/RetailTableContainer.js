import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import RetailTable from './RetailTable';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const useStyle = makeStyles({
    Btn: {
        backgroundColor: "#0D0B23",
        borderLeft: '15px'
    }
})

const RetailTableContainer = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const classes = useStyle();
    const history = useHistory();
    return (
        <Box display='flex' justifyContent='center' p={3} style={{maxHeight:'80%'}}>
            <Paper elevation={3} style={{ width: '100%', height:'100%' }}>
                <Box p={1} paddingLeft={3}>
                    <Typography variant='h3'> Varejo</Typography>
                    <Divider style={{ padding: '1px' }}/>
                    <Box display='flex' justifyContent='center' p={1}  >
                        <Paper elevation={2} style={{ width:'60%' }}>
                            <InputBase 
                            placeholder='Procurar por nome fantasia ou código ...'
                            style={{ width: '90%', padding:'5px' }}
                            onChange={event => {setSearchTerm(event.target.value)}}
                            >
                            </InputBase>
                            <IconButton type="submit" aria-label="search" style={{ right:'1px', position:'' }}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        <Box paddingLeft={3}>
                            <Button className={classes.Btn} variant="contained" color="primary" 
                            onClick= {() => history.push('/home/retail/add')}> + Novo varejo </Button>
                        </Box>
                    </Box>
                    <Box p={1}>
                    <RetailTable searchTerm={searchTerm}/>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default RetailTableContainer;