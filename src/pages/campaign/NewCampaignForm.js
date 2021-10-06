import { React, useState }  from 'react';
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
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';


import { useHistory } from 'react-router-dom';

const NewCampaignForm = () => {
    const history = useHistory();
    const [selectedDate, setSelectedDate] = useState(new Date('2021-08-08T21:11:54'));
    const [activeStep, setActiveStep] = useState(0)

    const handleSubmitData = () => {
        setActiveStep(1);
    }

    const handleSubmitFile = () => {
        setActiveStep(2);
    }

    const handleBack = () => {
        setActiveStep(0);
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Box  m={2} boxShadow={5} p={1} >
            <div>
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <Box p={1} paddingLeft={1} paddingBottom={0}>
                            <Typography variant='h3'> Nova campanha </Typography>
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
                    {activeStep ?  
                        <Slide direction="up" in={activeStep} mountOnEnter unmountOnExit>
                            <form>
                            <Box m={1} p={1} display="flex" justifyContent="center">
                                    <Typography variant='body1'>
                                        Selecione o arquivo de tipo .csv ou .XLS
                                    </Typography>
                                </Box>
                                <Box m={2} p={3} display="flex" justifyContent="center">
                                    <Button variant="contained" component="label">
                                        Arquivo da campanha
                                        <input type="file" style={{ display: "none" }} />
                                    </Button>
                                </Box>
                                <Box m={1} p={1} display="flex" justifyContent="center">
                                    <Typography variant='body2'>
                                        Nenhum arquivo selecionado
                                    </Typography>
                                </Box>
                                <Box m={1} p={1} display="flex" justifyContent="center">
                                    <Button variant="contained" component="label"style={{ minWidth: '125px', maxWidth: '200px', height: '40px'}} 
                                        onClick={handleBack}>
                                        Voltar
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={handleSubmitFile}
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
                                style={{ width: '55%' }}
                                id="nomeProduto"
                                label="Produto(s)"
                                variant="outlined"/>
                            <TextField
                                style={{ width: '43%', paddingLeft: '1vh' }}
                                id="idCampanha"
                                label="ID Campanha"
                                variant="outlined"/>
                        </Box>
                        <Box p={1}>
                            <TextField
                                style={{ width: '100%' }}
                                id="marca"
                                label="Marca"
                                variant="outlined"
                                select/>
                        </Box>
                        <Box p={1}>
                            <TextField
                                style={{ width: '100%' }}
                                id="descricao"
                                label="Descrição"
                                multiline
                                defaultValue=""
                                variant="outlined"
                                inputProps={{ maxLength: 74 }}/>
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
                                        id="date-picker-inline"
                                        label="Data de criação"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item sm={2} md={2}>
                                    <Box p={3}>
                                        <Button variant="contained" color="primary"
                                        style={{ backgroundColor: "#0D0B23", minWidth: '125px', maxWidth: '200px', height: '40px'}}
                                        onClick={handleSubmitData}>
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
                    <Stepper activeStep={activeStep}>
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

export default NewCampaignForm
