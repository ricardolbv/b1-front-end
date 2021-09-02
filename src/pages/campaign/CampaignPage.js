import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';
import CampaignTableContainer from './CampaignTableContainer';

const CampaignPage = (props) => {
    return (
        <Grid container direction="column" xs={12}>
            <Grid item xs={12}>
                <Route path="/home/campaign" exact render={() => <CampaignTableContainer {...props}/>}/>
            </Grid>
        </Grid>
    )
}

export default CampaignPage;