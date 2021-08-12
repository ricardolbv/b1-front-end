import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';
import BrandTableContainer from './BrandTableContainer';

const BrandPage = (props) => {
    return (
        <Grid container direction="column" xs={12}>
            <Grid item xs={12}>
                <Route path="/home/brand" exact render={() => <BrandTableContainer {...props}/>}/>
            </Grid>
        </Grid>
    )
}

export default BrandPage;