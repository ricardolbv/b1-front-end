import React from 'react';
import Grid from '@material-ui/core/Grid'
import SideMenu from './SideMenu';
import AppB1Bar from './AppB1Bar';
import { Route, Switch } from 'react-router-dom';
import HomeDisplay from './HomeDisplay';
import RetailPage from '../retail/RetailPage';
import BrandPage from '../brand/BrandPage';
import CampaignPage from '../campaign/CampaignPage';
import VisualizationPage from '../visualization/VisualizationPage';
import FormRetail from '../retail/FormRetail';


const HomePage = () => {
        return (
        <Grid container spacing={0} style={{height: '100vh' }}>
          <Grid item xs={2} >
                <SideMenu />
          </Grid>
          <Grid item  xs={10}>
             <AppB1Bar />
             <Switch>
                <Route path="/home" exact component={HomeDisplay}/>
                <Route path="/home/retail" exact component={RetailPage}/>
                <Route path="/home/retail/add" exact component={FormRetail}/>
                <Route path="/home/brand" exact component={BrandPage}/>
                <Route path="/home/campaign" exact component={CampaignPage}/>
                <Route path="/home/visualization" exact component={VisualizationPage}/>
             </Switch>
          </Grid>
        </Grid>
        )
}


export default HomePage;