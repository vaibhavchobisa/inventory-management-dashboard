import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SidePanelTabs from '../side-panel-tabs/side-panel-tabs.component';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { data } from '../../assets/city-data';
import './navbar.styles.scss';

const drawerWidth = 330;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname !== '/') setOpen(true);
    else setOpen(false);
  }, [location])

  const handleDrawerOpen = () => {
    if (location.pathname !== '/') setOpen(true);
  };

  const handleDrawerClose = () => {
    if (location.pathname !== '/') setOpen(false);
  };

  const clickHandler = (e) => {
    let city = e.target.innerText.replaceAll(' ', '').toLocaleLowerCase();
    navigate(`/${city}`);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: '#141414', borderBottom: '2.5px solid #262c30' }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <Typography sx={{ fontSize: '1.5rem' }} variant="h6" noWrap component="div">
            Inventory Management Dashboard
          </Typography>
          <div className='user' style={{ position: 'absolute', right: '2rem', display: 'flex', alignItems: 'center' }}>
            <IconButton size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ fontSize: '2rem' }}>
              <PersonOutlinedIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
            <Typography sx={{ fontSize: '1.5rem' }} variant='span'>user</Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#11262f',
            color: '#fff'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton sx={{ position: 'absolute', left: '1rem' }} onClick={() => { handleDrawerClose(); navigate('/'); }}>
            <WestOutlinedIcon sx={{ fontSize: '2rem', color: '#fff' }} />
          </IconButton>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon sx={{ fontSize: '2rem', color: '#fff' }} />
          </IconButton>
        </DrawerHeader>
        <Typography sx={{ fontSize: '2rem', position: 'relative', left: '1.5rem' }} variant='div'>Sample Stack</Typography>
        <SidePanelTabs />
        <List>
          {data.map((d) => (
            <div className='city-list-name' key={d.city} onClick={clickHandler}>
              <ListItem key={d.city} disablePadding>
                <ListItemButton selected={location.pathname.toLocaleLowerCase().includes(d.city.replaceAll(' ', '').toLocaleLowerCase())}>
                  <ListItemText primary={d.city} />
                </ListItemButton>
              </ListItem>
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}