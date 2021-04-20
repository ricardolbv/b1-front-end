import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyle = makeStyles({
    Root: {
       backgroundColor: '#E5E5E5',
    },
    Person: {
        color: 'black',
    }
})

const AppB1Bar = () => {
    const classes = useStyle();
        return (
            <AppBar position="static" className={classes.Root}>
                 <Toolbar>
                     <AccountCircleIcon className={classes.Person}/>
                 </Toolbar>
            </AppBar>
        )
}


export default AppB1Bar;