import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import { useUser } from '../../auth/useUser';

const useStyle = makeStyles({
    Root: {
       position: 'fixed',
       top: '25vh'
    }
})

const Retail = () =>{
    const history = useHistory();

    return(
    <>
        <ListItem button id='home' name='home' onClick= {() => history.push('/home')} >
                    <ListItemIcon > <HomeIcon style={{ color: "white"}}/>  </ListItemIcon>
                    <ListItemText primary={"Home"} style={{ color: "white", width: "auto" }}/>
        </ListItem>
        <ListItem button  name='marca' id='marca' onClick= {() => history.push('/home/brand')}>
                <ListItemIcon> <StorefrontIcon  style={{ color: "white"}} />  </ListItemIcon>
                <ListItemText primary={"Marca"} style={{ color: "white", width: "auto" }}/>
        </ListItem>
        <ListItem button  name='campanha' id='campanha' onClick= {() => history.push('/home/campaign')}>
                <ListItemIcon> <LocalGroceryStoreIcon  style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Campanha"} style={{ color: "white", width: "auto" }}/>
        </ListItem>
        <ListItem button name='visualizacao' id='visualizacao' onClick= {() => history.push('/home/visualization')}>
                <ListItemIcon  > <DashboardIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Visualização"} style={{ color: "white", width: "auto" }}/>
        </ListItem>
    </>
    )
}

const Brand = () =>{
    const history = useHistory();

    return(
    <>
        <ListItem button id='home' name='home' onClick= {() => history.push('/home')} >
                    <ListItemIcon > <HomeIcon style={{ color: "white"}}/>  </ListItemIcon>
                    <ListItemText primary={"Home"} style={{ color: "white", width: "auto" }}/>
        </ListItem>
        <ListItem button  name='campanha' id='campanha' onClick= {() => history.push('/home/campaign')}>
                <ListItemIcon> <LocalGroceryStoreIcon  style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Campanha"} style={{ color: "white", width: "auto" }}/>
        </ListItem>
        <ListItem button name='visualizacao' id='visualizacao' onClick= {() => history.push('/home/visualization')}>
                <ListItemIcon  > <DashboardIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Visualização"} style={{ color: "white", width: "auto" }}/>
        </ListItem>
    </>
    )
}

const Admin = () =>{
    const history = useHistory();

    return(
    <>
            <ListItem button id='home' name='home' onClick= {() => history.push('/home')} >
                <ListItemIcon > <HomeIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Home"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button  name='varejo' id='varejo' onClick= {() => history.push('/home/retail')} >
                <ListItemIcon > <PeopleIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Varejo"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button  name='marca' id='marca' onClick= {() => history.push('/home/brand')}>
                <ListItemIcon> <StorefrontIcon  style={{ color: "white"}} />  </ListItemIcon>
                <ListItemText primary={"Marca"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button  name='campanha' id='campanha' onClick= {() => history.push('/home/campaign')}>
                <ListItemIcon> <LocalGroceryStoreIcon  style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Campanha"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button name='visualizacao' id='visualizacao' onClick= {() => history.push('/home/visualization')}>
                <ListItemIcon  > <DashboardIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Visualização"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
    </>
    )
}


function TabOptions(props) {
   const classes = useStyle();
   const history = useHistory();

   const user = useUser();
   const { cargoId } = user;

   if (cargoId === 3)
        return <List disablePadding className={classes.Root}> <Brand/> </List>

   else if (cargoId === 2)
        return <List disablePadding className={classes.Root}> <Retail/> </List>

    else if (cargoId === 1)
        return <List disablePadding className={classes.Root}> <Admin/> </List>

}

export default TabOptions;