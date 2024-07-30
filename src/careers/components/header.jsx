import { useEffect, useState } from 'react';
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
import { getCookie } from '../../utilities/cookies';

const Header = ({careerUser}) => {
  const { theme  , toggleTheme} = useTheme();
  
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [orgName, setOrgName] = useState('');
  const location = useLocation();
  const toggleLeftDrawer = () => setLeftDrawerOpen((prev) => !prev);

  const pathName = location.pathname;

  useEffect(() => {
    const name = pathName.split('/')[2]; // Get the part after the first slash
    const decodedName = decodeURIComponent(name);
    const hrTheme = getCookie('P13N');

    if(theme !==hrTheme){
      toggleTheme();
    }
    if (decodedName) {
      setOrgName(decodedName);
    }else {
      const orgNameTemp = localStorage.getItem('Organization');
      setOrgName(orgNameTemp);
    }
  }, []);

  const shouldRenderMenuIcon = !pathName.includes(`/career/${orgName}`) && orgName === 'Clikkle Technologies' ;

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
        <Brand shouldRenderMenuIcon={shouldRenderMenuIcon} orgName={orgName} />
        <AppListToggler careerUser={careerUser} shouldRenderMenuIcon={shouldRenderMenuIcon} />  
        </Toolbar>
      </AppBar>
      <Divider />
      <SidebarDrawer open={leftDrawerOpen} toggle={toggleLeftDrawer}  shouldRenderMenuIcon={shouldRenderMenuIcon} orgName={orgName}/>
    </Box>
  );
};

export default Header;
