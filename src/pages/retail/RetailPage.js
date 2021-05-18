import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';
import RetailTableContainer from './RetailTableContainer';
import FormRetail from './FormRetail';

const RetailPage = () => {
    return (
        <Grid container direction="column" xs={12}>
            <Grid item xs={12}>
                <Route path="/home/retail" exact component={RetailTableContainer}/>
            </Grid>
        </Grid>
    )
}

export default RetailPage;