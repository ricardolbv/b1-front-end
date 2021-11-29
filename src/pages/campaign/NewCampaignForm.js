import { React, useState, useEffect }  from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';import Tab from '@material-ui/core/Tab';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import 'date-fns';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import Loading from '../../common/Loading';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import { fetchBrands } from '../brand/thunks';
import { useHistory } from 'react-router-dom';
import TestComponent from './TestComponent';
import { useUser } from '../../auth/useUser';

const NewCampaignForm = (props) => {
    const history = useHistory();
    const user = useUser()
    const { usuarioId } = user;


    function fileNameSplit (fileName, id_campanha){
        const [first, second] = fileName.split('.');
        return first+"_"+"."+id_campanha+second
    }

    useEffect(() => {
        props.brandLoad(usuarioId);
    }, [])


    return (
        <Box  m={2} boxShadow={5} p={1} >
            <div>
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <Box p={1} paddingLeft={1} paddingBottom={0}>
                            <Typography variant='h3'> {props.type === 'Nova'? "Nova campanha" : "Editando campanha"} </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Box p={1} paddingRight={0} display='flex' justifyContent='flex-end'>
                            <Tab icon={<ArrowBackIosRoundedIcon />} onClick={() => history.push('/home/campaign')} />
                        </Box>
                    </Grid>
                </Grid>
                <Divider variant="middle" style={{ padding: '1px' }} />
            </div>
            <Grid container spacing={0}>
                <Grid item sm={6}>
                <Box  m={5} boxShadow={5} p={5} style={{ height: '45vh' }}>
                    {props.step ?  
                        <Slide direction="up" in={props.step} mountOnEnter unmountOnExit>
                             <form>
                            <Box m={1} p={1} display="flex" justifyContent="center">
                                    <Typography variant='body1'>
                                        Selecione o arquivo de tipo .csv ou .XLS
                                    </Typography>
                                </Box>
                                <Box m={2} p={3} display="flex" justifyContent="center">
                                    <Button variant="contained" component="label">
                                        Arquivo da campanha
                                        <input type="file" style={{ display: "none" }} name='filename' enctype="multipart/form-data" onChange={props.handleFile} />
                                    </Button>
                                </Box>
                                <Box m={1} p={1} display="flex" justifyContent="center">
                                    <Typography variant='body1'>
                                        {props.file ? fileNameSplit(props.file.name, props.campaign_id): 'Nenhum arquivo selecionado' }
                                    </Typography>
                                </Box>
                                <Box m={1} p={1} display="flex" justifyContent="center">
                                    <Button variant="contained" color="primary" onClick={props.onUploadFile}
                                        style={{ backgroundColor: "#0D0B23", minWidth: '125px', maxWidth: '200px', height: '40px'}}>
                                            Proximo
                                        </Button>
                                </Box>
                            </form>
                        </Slide> 
                                :
                        <form id="dadosCampanha">
                        <Box p={1}>
                            <TextField  
                                id="produto"
                                label="Nome da campanha"
                                variant="outlined"
                                fullWidth
                                onChange={props.onChange}
                                value={props.campaign.produto}
                                error={props.prodValidation}
                                    {...(props.prodValidation && { helperText: 'Poucos caracteres' })}/>
                        </Box>
                        <Box p={1}>
                            <TextField
                                style={{ width: '100%' }}
                                id="marca"
                                label="Marca"
                                variant="outlined"
                                select
                                onChange={props.onSelect}
                                value={props.campaign.marca}
                                error={props.marcaValidation}
                                {...(props.marcaValidation && { helperText: 'Marca é obrigatória' })}>
                                    {props.brands.map(brand => 
                                         <MenuItem key={brand.id} name={brand.id} value={brand.id}> {brand.nome}</MenuItem>
                                    )}
                                </TextField>
                        </Box>
                        <Box p={1}>
                            <TextField
                                style={{ width: '100%' }}
                                id="descricao"
                                label="Descrição"
                                multiline
                                defaultValue=""
                                variant="outlined"
                                onChange={props.onChange}
                                value={props.campaign.descricao}
                                inputProps={{ maxLength: 74 }}
                                error={props.descricaoValdiation}
                                    {...(props.idescricaoValdiation && { helperText: 'Descrever campanha' })}/>
                        </Box>
                        <Box p={1}>
                            <Grid container spacing={0}>
                                <Grid item sm={7} md={7}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="dataCriacao"
                                        label="Data de criação"
                                        value={props.date}
                                        onChange={date => props.onDataChange(date)}
                                    />
                                </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item sm={2} md={2}>
                                    <Box p={3}>
                                        <Button variant="contained" color="primary"
                                        style={{ backgroundColor: "#0D0B23", minWidth: '125px', maxWidth: '200px', height: '40px'}}
                                        onClick={props.onSubmit}>
                                            Proximo
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                }
                </Box>
                </Grid>
                <Grid item sm={6}>
                <Box  m={5} boxShadow={0} p={5} marginTop={15}>
                <Loading isLoading={props.isLoading}/>
                    <Stepper activeStep={props.step}>
                        <Step StepLabel='Dados'>
                            <StepLabel >
                                Dados
                                <StepButton/>
                            </StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>
                                Arquivo
                                <StepButton />
                            </StepLabel>
                        </Step>
                    </Stepper>
                </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

const mapStateToProps = state => ({
    brands: state.brands,
    campaign_id: state.campaign_id
  })
  
  const mapDispatchToProps = dispatch => ({
    brandLoad: id => dispatch(fetchBrands(id)),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(NewCampaignForm);
