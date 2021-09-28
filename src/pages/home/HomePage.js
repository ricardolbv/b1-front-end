import {React, useState} from 'react';
import Grid from '@material-ui/core/Grid'
import SideMenu from './SideMenu';
import AppB1Bar from './AppB1Bar';
import { Route, Switch } from 'react-router-dom';
import HomeDisplay from './HomeDisplay';
import RetailPage from '../retail/RetailPage';
import BrandPage from '../brand/BrandPage';
import CampaignPage from '../campaign/CampaignPage';
import VisualizationPage from '../visualization/VisualizationPage';
import ManageRetailForm from '../retail/ManageRetailForm';
import ManageRetailFormEdit from '../retail/ManageRetailFormEdit';
import ManageBrandForm from '../brand/ManageBrandForm';
import ManageBrandFormEdit from '../brand/ManageBrandFormEdit';
import ManageCampaignForm from '../campaign/ManageCampaignForm';
import Toast from '../../common/Toast';

import PrivateRoute from '../../auth/PrivateRoute';

const HomePage = () => {
    const [toast, setToast] = useState(false);
    const [status, setStatus] = useState("success");
    const [message, setMessage] = useState("");

    const handleClose = () => setToast(false);
   
        return (
        <>
        <Grid container spacing={0} style={{height: '100vh' }}>
          <Grid item xs={2} >
                <SideMenu />
          </Grid>
          <Grid item  xs={10}>
             <AppB1Bar />
             <Switch>
                <PrivateRoute path="/home" exact component={HomeDisplay} />
                <PrivateRoute path="/home/retail" exact render={(props) => <RetailPage {...props}
                setToast={setToast} setStatus={setStatus} setMessage={setMessage}/>}/>
                <PrivateRoute path="/home/retail/add" exact render={(props) => <ManageRetailForm {...props} 
                setToast={setToast} setStatus={setStatus} setMessage={setMessage}/>}/>
                <PrivateRoute path="/home/retail/edit/:id" exact render={(props) => <ManageRetailFormEdit {...props} 
                setToast={setToast} setStatus={setStatus} setMessage={setMessage}/>}/>
                <PrivateRoute path="/home/brand" exact render={(props) => <BrandPage {...props}
                setToast={setToast} setStatus={setStatus} setMessage={setMessage}/>}/>
                <PrivateRoute path="/home/brand/add" exact render={(props) => <ManageBrandForm {...props} 
                setToast={setToast} setStatus={setStatus} setMessage={setMessage}/>}/>
                <PrivateRoute path="/home/brand/edit/:id" exact render={(props) => <ManageBrandFormEdit {...props} 
                setToast={setToast} setStatus={setStatus} setMessage={setMessage}/>}/>
                <PrivateRoute path="/home/campaign" exact component={CampaignPage}/>
                <PrivateRoute path="/home/campaign/add" exact render={(props) => <ManageCampaignForm {...props} 
                setToast={setToast} setStatus={setStatus} setMessage={setMessage}/>}/>
                <PrivateRoute path="/home/visualization" exact component={VisualizationPage}/>
             </Switch>
          </Grid>
        </Grid>
        <Toast status={status} message={message} open={toast} handleClose={handleClose}/>
        </>
        )
}


export default HomePage;