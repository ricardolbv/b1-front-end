import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';
import RetailTableContainer from './RetailTableContainer';

const RetailPage = (props) => {
    return (
        <Grid container direction="column" xs={12}>
            <Grid item xs={12}>
                <Route path="/home/retail" exact render={() => <RetailTableContainer {...props}/>}/>
            </Grid>
        </Grid>
    )
}

export default RetailPage;