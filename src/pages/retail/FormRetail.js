import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Tab from '@material-ui/core/Tab';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useHistory } from 'react-router-dom';


const FormRetail = (props) => {
    const history = useHistory();
    
    return (
        <Box display='flex' justifyContent='center' p={3} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'100%' }}>
        <Grid container spacing={1}>
            <Grid item sm={6}>
            <Box p={1} paddingLeft={1} paddingBottom={0}>
                <Typography variant='h3'> Novo varejo</Typography>
            </Box>
        </Grid>
            <Grid item sm={6}>
                <Box p={1} paddingRight={3} display='flex' justifyContent='flex-end'>
                    <Tab icon={<ArrowBackIosRoundedIcon/> } onClick={() => history.push('/home/retail')}/>
                </Box>
            </Grid>
        </Grid>
        <Divider variant="middle" style={{ padding: '1px' }}/>
            <Grid container spacing={1}>
                <Grid item sm={6}>
                    <Box p={2} >
                        <Paper elevation={5} style={{ height: '20vh' }}>
                        <Box p={1}>
                            <Typography variant='h5'> Dados de usuário</Typography>
                        </Box>
                        <Box p={1}>
                            <TextField id="emailVarejo" label="E-mail" variant="outlined"  onChange={props.onChange} 
                             style={{ width:'55%',paddingRight: '1vh' }}/>
                            <TextField style={{ width:'40%' }}
                                    id="senha"
                                    label="Senha"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    onChange={props.onChange}
                            />
                        </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item sm={6}>
                <Box p={2}>
                        <Paper elevation={5} style={{ height: '50vh' }}>
                        <Box p={1}>
                            <Typography variant='h5'> Dados de varejo</Typography>
                        </Box>
                        <Box p={1}>
                            <TextField id="nome_fantasia" label="Nome fantasia" variant="outlined"  style={{ width:'49%', paddingRight: '1vh' }} onChange={props.onChange}/>
                            <TextField id="razao_social" label="Razão social" variant="outlined"  style={{ width:'49%'}} onChange={props.onChange}/>
                        </Box>
                        <Box p={1}>
                            <TextField id="cnpj" label="CNPJ" variant="outlined"  style={{ width:'49%', paddingRight: '1vh' }} onChange={props.onChange}/>
                            <TextField id="telefone" label="Telefone" variant="outlined"  style={{ width:'49%'}} onChange={props.onChange}/>
                        </Box>
                        <Box p={1}>
                            <TextField id="segmento" label="Segmento" variant="outlined"  style={{ width:'100%'}} onChange={props.onChange}/>
                        </Box>
                    </Paper>
                    </Box>
                </Grid>
            </Grid>
            <Box p={2} display='flex' justifyContent='flex-end' >
            <Button variant="contained" color="primary" 
            style={{  
                backgroundColor: "#0D0B23",
                width: '300px',
                height: '40px',
                marginTop: '35px',  }}
            onClick={props.onSubmit}>
                    Criar
            </Button>
            </Box>
       </Paper>
       </Box>
    )
}

export default FormRetail;