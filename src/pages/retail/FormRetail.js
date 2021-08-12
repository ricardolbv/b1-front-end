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
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { newRetail } from './thunks';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import { fetchSegments } from './thunks';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const FormRetail = (props) => {
    const history = useHistory();
    useEffect(() => {
        props.segmentsLoad();
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
                            <Tab icon={<ArrowBackIosRoundedIcon />} onClick={() => history.push('/home/retail')} />
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
                                    <TextField id="email" label="E-mail" variant="outlined" value={props.retail.email}
                                        style={{ width: '55%', paddingRight: '1vh' }} error={props.mailValidation} onChange={props.onChange}
                                        {...(props.mailValidation && { helperText: 'Formato inválido' })} {...(props.type == 'Editando varejo'&& {disabled:true })} />
                                    <TextField style={{ width: '43%' }}
                                        id="senha"
                                        label="Senha"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        value={props.retail.senha}
                                        onChange={props.onChange}
                                        error={props.pswValidation}
                                        {...(props.type == 'Editando varejo'&& {disabled:true })}
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
                                    <Typography variant='h5'> Dados de varejo</Typography>
                                </Box>
                                <Box p={1}>
                                    <TextField id="nome_fantasia" label="Nome fantasia" variant="outlined" style={{ width: '49%', paddingRight: '1.4vh' }} onChange={props.onChange} error={props.nomeFantasiaValidation}
                                        {...(props.nomeFantasiaValidation && { helperText: 'Poucos caracteres' })} value={props.retail.nome_fantasia} />
                                    <TextField id="razao_social" label="Razão social" variant="outlined" style={{ width: '49%' }} onChange={props.onChange} error={props.razaoSocialValidation}
                                        {...(props.razaoSocialValidation && { helperText: 'Poucos caracteres' })} value={props.retail.razao_social} />
                                </Box>
                                <Box p={1}>
                                    <InputMask mask="99999999999999" onChange={props.onChange} value={props.retail.cnpj}>
                                        {(inputProps) =>
                                            <TextField id="cnpj" label="CNPJ" variant="outlined"  {...inputProps} style={{ width: '49%', paddingRight: '1.4vh' }} error={props.cnpjValidation}
                                                {...(props.cnpjValidation && { helperText: 'CNPJ inválido' })} />
                                        }
                                    </InputMask>
                                    <InputMask mask="(99) 9 9999-9999" onChange={props.onChange} value={props.retail.telefone}>
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
                                        value={props.retail.segmento}
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
                                    <TextField id="inscricao" label="Inscrição" variant="outlined" style={{ width: '100%' }} onChange={props.onChange}
                                        value={props.retail.inscricao} />
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
})

const mapDispatchToProps = dispatch => ({
    segmentsLoad: () => dispatch(fetchSegments()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormRetail);