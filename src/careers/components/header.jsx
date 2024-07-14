import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import Brand from './brand';
import SidebarDrawer from './sidebarDrawer';
import AppListToggler from './appList';
import { useTheme } from '../atoms/theme';

const Header = () => {
  const { theme } = useTheme();
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleLeftDrawer = () => setLeftDrawerOpen((prev) => !prev);

  const orgName = localStorage.getItem('Organization');
  const pathName = location.pathname;

  const shouldRenderMenuIcon =
    !pathName.includes(`/career/${orgName}`) && orgName === 'clikkle' ;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        style={{
          boxShadow: 'none',
          ...(theme === 'light' ? { backgroundColor: '#fff' } : {}),
        }}
      >
      
        <Toolbar>
          {
            shouldRenderMenuIcon && 
            <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleLeftDrawer}
            style={{ ...(theme === 'light' ? { color: '#000' } : {}) }}
          >
            <MenuIcon />
          </IconButton>
        
          }
        


<Brand />
     

<AppListToggler />




       

    
         
        </Toolbar>
      </AppBar>
      <Divider />

      <SidebarDrawer open={leftDrawerOpen} toggle={toggleLeftDrawer} />
    </Box>
  );
};

export default Header;
