import { useState, useEffect, useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Tab from '@material-ui/core/Tab';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useHistory, useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { newRetail } from './thunks';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { useSelector} from 'react-redux';

const EditRetailForm = (props) => {
    const retails = useSelector(state => state.retails);
    const history = useHistory();
    let {id} = useParams()

    const [_retail] = retails.filter(item => item.id == id);

    useEffect(() => {
        console.log(_retail)
        console.log(retails)
        console.log(id)
    },[])
    
    return (
        <Box boxShadow={3} display='flex' justifyContent='center' p={3} style={{maxHeight:'85%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'100%' }}>
        <Grid container spacing={1}>
            <Grid item sm={6}>
            <Box p={1} paddingLeft={1} paddingBottom={0}>
                <Typography variant='h3'> Editar varejo </Typography>
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
                    <Box boxShadow={3} p={2} m={1}>
                        <Paper elevation={5} style={{ height: '100%' }}>
                        <Box p={1}>
                            <Typography variant='h5'> Dados de usuário</Typography>
                        </Box>
                        <Box p={1} >
                                <TextField id="emailVarejo" label="E-mail" variant="outlined"
                                style={{ width:'55%',paddingRight: '1vh' }} error={props.mailValidation} onChange={props.onChange} value={_retail.email}
                                {...(props.mailValidation && {helperText:'Formato inválido'})}/>
                            <TextField style={{ width:'40%' }}
                                    id="senha"
                                    label="Senha"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    onChange={props.onChange}
                                    error={props.pswValidation}
                                    value={_retail.email}
                                    {...(props.pswValidation && {helperText:'Poucos caracteres'})}
                            />
                        </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item sm={6}>
                <Box boxShadow={3} p={2} m={1}>
                        <Paper elevation={5} style={{ height: '100%' }}>
                        <Box p={1}>
                            <Typography variant='h5'> Dados de varejo</Typography>
                        </Box>
                        <Box p={1}>
                            <TextField id="nome_fantasia" label="Nome fantasia" variant="outlined"  style={{ width:'49%', paddingRight: '1vh' }} onChange={props.onChange} error={props.nomeFantasiaValidation}
                            {...(props.nomeFantasiaValidation && {helperText:'Poucos caracteres'})} value={_retail.nome_fantasia}/>
                            <TextField id="razao_social" label="Razão social" variant="outlined"  style={{ width:'49%'}} onChange={props.onChange} error={props.razaoSocialValidation}
                            {...(props.razaoSocialValidation && {helperText:'Poucos caracteres'})} value={_retail.razao_social} />
                        </Box>
                        <Box p={1}>
                        <InputMask mask="99999999999999" onChange={props.onChange} value={newRetail.cnpj}>
                            {(inputProps) => 
                            <TextField id="cnpj" label="CNPJ" variant="outlined"  {...inputProps} style={{ width:'49%', paddingRight: '1vh' }} error={props.cnpjValidation}
                            {...(props.cnpjValidation && {helperText:'CNPJ inválido'})}/>
                            }
                        </InputMask>
                        <InputMask mask="(99) 9 9999-9999" onChange={props.onChange} value={newRetail.telefone}>
                            {(inputProps) => 
                            <TextField id="telefone" label="Telefone" variant="outlined"  style={{ width:'49%'}} />}
                        </InputMask>
                        </Box>

                        <Box p={1}>
                            <InputLabel id='segmento-label'> Segmento </InputLabel>
                            <TextField
                             id="segmento"
                             labelId='segmento-label'
                             variant="outlined"
                             onChange={props.onChangeSelect}
                             style={{ width: '100%' }}
                             select>
                                  {//props.segments.map(seg => 
                                      //<MenuItem  id="segmento" key={seg.id} name={seg.id} value={seg.id}> {seg.segmento}</MenuItem>
                                      <MenuItem  id="segmento" key='test' name='test' value='test'> 'test'</MenuItem>
                                  }
                            </TextField>
                        
                        </Box>
                        <Box p={1}>
                            <TextField id="inscricao" label="Inscrição" variant="outlined"  style={{ width:'100%'}} onChange={props.onChange} />
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

/*const mapStateToProps = state => ({
    segments: state.segments,
  })

const mapDispatchToProps = dispatch => ({
    segmentsLoad: () => dispatch(fetchSegments()),
})*/

export default EditRetailForm;