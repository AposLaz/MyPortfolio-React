import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as NavLink } from 'react-scroll';

//Style for mobile nav
import {nav_mobile_style} from '../styles/styles'
import {list_item_mobile} from '../styles/styles'
import {navbar_style} from '../styles/styles'


const drawerWidth = 300;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  //NavBar for mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={ nav_mobile_style }>
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'cursive', fontSize: '2rem', fontWeight: 'bolder'}}>
        Aplz
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding sx={list_item_mobile}>
              <NavLink 
                className='nav-link-mobile'
                activeClass="active"
                to='home'
                spy={true} 
                smooth={true}
                duration={1000} 
                offset={-80}
                onClick={handleDrawerToggle}
                >
                Home
              </NavLink>
          </ListItem>
          <ListItem disablePadding sx={list_item_mobile}>
              <NavLink 
                className='nav-link-mobile'
                activeClass="active"
                to='about'
                spy={true} 
                smooth={true}
                duration={1000} 
                offset={-80}
                onClick={handleDrawerToggle}
                >
                About
              </NavLink>
          </ListItem>
          <ListItem disablePadding sx={list_item_mobile}>
                <NavLink 
                  className='nav-link-mobile'
                  activeClass="active"
                  to='skills'
                  spy={true} 
                  smooth={true}
                  duration={1000} 
                  offset={-80}
                  onClick={handleDrawerToggle}
                  >
                  Skills
              </NavLink>
          </ListItem>
          <ListItem disablePadding sx={list_item_mobile}>
            <NavLink 
                  className='nav-link-mobile'
                  activeClass="active"
                  to='projects'
                  spy={true} 
                  smooth={true}
                  duration={1000} 
                  offset={-80}
                  onClick={handleDrawerToggle}
                  >
                  Projects
              </NavLink>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" sx={navbar_style}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } ,fontFamily: 'cursive', fontSize: '40px', fontWeight: 'bolder', transform: 'skewX(-0.04turn)' }}
          >
            Aplz
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <NavLink 
                className='nav-link'
                activeClass="active"
                to='home'
                spy={true} 
                smooth={true}
                duration={1000} 
                offset={-100}
                >
                HOME
              </NavLink>
              <NavLink 
                className='nav-link'
                activeClass="active"
                to='about'
                spy={true} 
                smooth={true}
                duration={1000} 
                offset={-50}
                >
                ABOUT
              </NavLink>
              <NavLink 
                className='nav-link'
                activeClass="active"
                to='skills'
                spy={true} 
                smooth={true}
                duration={1000} 
                offset={-50}
                >
                SKILLS
              </NavLink>
              <NavLink 
                className='nav-link'
                activeClass="active"
                to='projects'
                spy={true} 
                smooth={true}
                duration={1000} 
                offset={-50}
                >
                PROJECTS
              </NavLink>
              {/* <Button 
                component={Link} 
                href='/' 
                sx={button_navbar}
                >
                Home
              </Button> */}
              
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          anchor='top'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
