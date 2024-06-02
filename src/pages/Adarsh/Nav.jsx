import * as React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    Stack,
    Grid,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button,
    Tooltip,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,

} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppsIcon from '@mui/icons-material/Apps';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useMenu } from '../../hooks/useMenu';
import { useTheme } from '../../style/theme';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { anchorEl: anchorElApps, openMenu: openAppsMenu, closeMenu: closeAppsMenu } = useMenu();


  const {
    anchorEl: anchorElSettings,
    openMenu: openSettingsMenu,
    closeMenu: closeSettingsMenu,
} = useMenu();
const { toggleTheme, mode } = useTheme();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' ,}}>
      <CssBaseline />
      <AppBar component="nav"
      sx={{
        backgroundColor: 'background.view', 
      }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } ,color:"text.secondary"}}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000' }}>
                {item}
              </Button>
            ))} */}
             <IconButton onClick={openSettingsMenu}
             sx={{
              margin:".7rem"
             }}
             >
                                    <SettingsIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorElSettings}
                                    open={Boolean(anchorElSettings)}
                                    onClose={closeSettingsMenu}>
                                    <MenuItem onClick={toggleTheme}>
                                        <ListItemIcon>
                                            {mode === 'dark' ? (
                                                <LightModeIcon fontSize='small' />
                                            ) : (
                                                <DarkModeIcon fontSize='small' />
                                            )}
                                        </ListItemIcon>
                                        Appearance
                                    </MenuItem>
                                </Menu>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="../../components/images/hr-text.png" />
            
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
    </Box>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav;
