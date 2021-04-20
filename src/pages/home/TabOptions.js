import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

/*
const useStyle = makeStyles({
    Tab: {
       
    }
})*/

function TabOptions(props) {
   // const classes = useStyle();
    return (
        <List>
            <ListItem button>
                <ListItemIcon> <HomeIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Home"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon> <PeopleIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Verejo"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon> <StorefrontIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Marca"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon> <LocalGroceryStoreIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Campanha"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon> <DashboardIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Visualização"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
        </List>
    )
}

export default TabOptions;