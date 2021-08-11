import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import BrandTable from './BrandTable';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyle = makeStyles({
    Btn: {
        backgroundColor: "#0D0B23",
        borderLeft: '15px'
    }
})

const BrandTableContainer = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const classes = useStyle();
    const history = useHistory();
    return (
        <Box boxShadow={5} m={2} p={2}>
                <Box p={1} paddingLeft={3}>
                    <Typography variant='h3'> Marca</Typography>
                    <Divider style={{ padding: '1px' }}/>
                    <Box display='flex' justifyContent='center' p={1}>
                        <Box boxShadow={5} paddingRight={45} >
                        <InputBase 
                            margin='dense'
                            placeholder='Procurar por nome, CNPJ ou email...'
                            style={{ width: '52vh', padding:'5px' }}
                            onChange={event => {setSearchTerm(event.target.value)}}
                            startAdornment={
                                <InputAdornment position='end'>
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            >
                        </InputBase>
                        </Box>
                        <Box paddingLeft={3}>
                            <Button className={classes.Btn} variant="contained" color="primary" 
                            onClick= {() => history.push('/home/retail/add')}> + Nova marca </Button>
                        </Box>
                    </Box>
                    <Box p={1}>
                    <BrandTable searchTerm={searchTerm} {...props}/>
                    </Box>
                </Box>
        </Box>
    )
}

export default BrandTableContainer;