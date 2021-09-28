import { Redirect, Route } from 'react-router-dom';
import { useUser } from './useUser';

const PrivateRoute = props => {
    const user = useUser();

    if(!user) return <Redirect to='/' />
    return <Route {...props} />
}

export default PrivateRoute;