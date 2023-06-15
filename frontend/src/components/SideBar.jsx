import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../store/user.context';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

const SideBar = () => {

    const userCtx = useContext(UserContext);
    const [userId, setUserId] = useState(userCtx.userId);
  
    useEffect(() => {
      setUserId(userCtx.userId);
    }, [userCtx.userId]);
  

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [showClose, setShowClose] = React.useState(true)
  
    const handleDrawerOpen = () => {
      setOpen(true);
      setShowClose(false)
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
      setShowClose(true)
    };


    


  return (
    <div>
        <Box sx={{ display: 'flex' }}>
           <CssBaseline />
               <Drawer variant="permanent" open={open}>
                   <DrawerHeader>
                        {showClose ? 
                        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"sx={{marginRight: 0, ...(open && { display: 'none' }),}} >
                           <MenuIcon style={{color:"black"}}/>
                       </IconButton>
                                   :
                        <IconButton onClick={handleDrawerClose} >
                                 {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton> }

        </DrawerHeader>
            <Divider />
               <List>
               {['My Buys', 'My Favorites', 'Settings'].map((text, index) => (
               <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <Link className='lnk' style={{color:'#ee644c'}} to={text === 'My Buys' ? `/myBuys/${userId}` : text === 'My Favorites' ? '/favourites' : '/settings'}>

                        <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >

                             <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto',justifyContent: 'center', }} >

                             {index === 0 ? <ShoppingBasketIcon  style={{ color: '#ee644c' }}/> : index === 1 ? <FavoriteIcon style={{ color: '#ee644c' }}/> : <SettingsIcon style={{ color: '#ee644c' }}/>}

                             </ListItemIcon>
                             
                             <ListItemText  primary={text} sx={{ opacity: open ? 1 : 0 }} />
                       </ListItemButton>
                       </Link> 
                    </ListItem> ))}
              </List>
           <Divider />
       </Drawer>
    </Box>
    </div>
  )
}

export default SideBar