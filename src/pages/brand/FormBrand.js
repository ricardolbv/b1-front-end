import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Tab from '@material-ui/core/Tab';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { StaticRouter, useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import { fetchSegments, fetchRetails } from '../retail/thunks';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const FormBrand = (props) => {
    const history = useHistory();
    useEffect(() => {
        props.segmentsLoad();
        props.retailLoad();
    }, [])

    return (
        <Box  m={2} boxShadow={5} p={1} >
            <div>
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <Box p={1} paddingLeft={1} paddingBottom={0}>
                            <Typography variant='h3'> {props.type} </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Box p={1} paddingRight={0} display='flex' justifyContent='flex-end'>
                            <Tab icon={<ArrowBackIosRoundedIcon />} onClick={() => history.push('/home/brand')} />
                        </Box>
                    </Grid>
                </Grid>
                <Divider variant="middle" style={{ padding: '1px' }} />
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <Box  p={2} m={1}>
                            <Paper elevation={5} style={{ height: '100%' }}>
                                <Box p={1}>
                                    <Typography variant='h5'> Dados de usuário</Typography>
                                </Box>
                                <Box p={1} >
                                    <TextField id="email" label="E-mail" variant="outlined" value={props.brand.email}
                                        style={{ width: '55%', paddingRight: '1vh' }} error={props.mailValidation} onChange={props.onChange}
                                        {...(props.mailValidation && { helperText: 'Formato inválido' })} {...(props.type == 'Editando marca'&& {disabled:true })} />
                                    <TextField style={{ width: '43%' }}
                                        id="senha"
                                        label="Senha"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        value={props.brand.senha}
                                        onChange={props.onChange}
                                        error={props.pswValidation}
                                        {...(props.type == 'Editando marca'&& {disabled:true })}
                                        {...(props.pswValidation && { helperText: 'Poucos caracteres' })}
                                    />
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Box  p={2} m={1}>
                            <Paper elevation={5} style={{ height: '100%' }}>
                                <Box p={1}>
                                    <Typography variant='h5'> Dados da marca</Typography>
                                </Box>
                                <Box p={1}>
                                    <TextField id="nome" label="Nome da marca" variant="outlined" style={{ width: '100%', paddingRight: '1vh' }} onChange={props.onChange} error={props.nomeValidation}
                                        {...(props.nomeValidation && { helperText: 'Poucos caracteres' })} value={props.brand.nome} />
                                </Box>
                                <Box p={1}>
                                    <InputMask mask="99999999999999" onChange={props.onChange} value={props.brand.cnpj}>
                                        {(inputProps) =>
                                            <TextField id="cnpj" label="CNPJ" variant="outlined"  {...inputProps} style={{ width: '49%', paddingRight: '1.4vh' }} error={props.cnpjValidation}
                                                {...(props.cnpjValidation && { helperText: 'CNPJ inválido' })} />
                                        }
                                    </InputMask>
                                    <InputMask mask="(99) 9 9999-9999" onChange={props.onChange} value={props.brand.telefone}>
                                        {(inputProps) =>
                                            <TextField id="telefone" label="Telefone" variant="outlined" style={{ width: '49%' }} onChange={props.onChange} />}
                                    </InputMask>
                                </Box>

                                <Box p={1}>
                                    <TextField
                                        id="segmento"
                                        label='Segmento'
                                        variant="outlined"
                                        onChange={props.onChangeSelect}
                                        value={props.brand.segmento}
                                        style={{ width: '100%' }}
                                        select
                                        error={props.segmentoValidation}
                                        {...(props.segmentoValidation && { helperText: 'Segmento é obrigatório' })}>
                                        
                                        {props.segments.map(seg =>
                                            <MenuItem key={seg.id} name={seg.id} value={seg.id}> {seg.segmento}</MenuItem>
                                        )}
                                    </TextField>

                                </Box>
                                <Box p={1}>
                                    <TextField 
                                        id="varejo_responsavel" 
                                        label="Varejo" 
                                        variant="outlined" 
                                        style={{ width: '100%' }} 
                                        onChange={props.onChangeRetail}
                                        value={props.brand.varejo_responsavel} select
                                        error={props.retailValidation}
                                        {...(props.retailValidation && { helperText: 'Varejo é obrigatório' })}>

                                        {props.retails.map(ret =>
                                            <MenuItem key={ret.id} name={ret.id} value={ret.id}> {ret.razao_social}</MenuItem>
                                        )}
                                    </TextField>

                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
                <Box p={2} paddingRight={3} display='flex' justifyContent='flex-end' >
                    <Button variant="contained" color="primary"
                        style={{
                            backgroundColor: "#0D0B23",
                            width: '300px',
                            height: '40px',
                        }}
                        onClick={props.onSubmit}>
                        Salvar
            </Button>
                </Box>
            </div>
        </Box>
    )
}

const mapStateToProps = state => ({
    segments: state.segments,
    retails: state.retails,
})

const mapDispatchToProps = dispatch => ({
    segmentsLoad: () => dispatch(fetchSegments()),
    retailLoad: () => dispatch(fetchRetails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormBrand);