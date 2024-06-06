import * as React from "react";
import PropTypes from "prop-types";
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
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppsIcon from "@mui/icons-material/Apps";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useMenu } from "../../hooks/useMenu";
import { useTheme } from "../../style/theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
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
  const {
    anchorEl: anchorElApps,
    openMenu: openAppsMenu,
    closeMenu: closeAppsMenu,
  } = useMenu();

  const {
    anchorEl: anchorElSettings,
    openMenu: openSettingsMenu,
    closeMenu: closeSettingsMenu,
  } = useMenu();
  const { toggleTheme, mode } = useTheme();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="px-0 sm:px-12"
        component="nav"
        sx={{ backgroundColor: "background.default" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <div className="flex items-center">
              <img
                className={`w-10 sm:w-14 `}
                src="https://cdn.clikkle.com/images/hr/logo/2023/hr.png"
                alt="clikkle"
              />
              <h1
                className={`text-gray-400 mx-2 dark:text-white text-center align-middle sm:text-xl md:text-xl lg:text-xl font-normal text-sm`}
              >
                <span className="text-gray-500 font-medium"> Clikkle </span> Hr
              </h1>
            </div>
          </Box>
          <Box
            sx={{
              display:"flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000' }}>
                {item}
              </Button>
            ))} */}

            <AppsIcon
              sx={{  display : { xs: 'block' , sm:'none'}   }}
              className="mx-1"
              fontSize="large"
              color="action"
            />

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="../../components/images/hr-text.png"
                />
              </IconButton>
            </Tooltip>



            <Typography
              sx={{  display : { xs: 'none' , sm:'block'} , color: "text.secondary", marginLeft: 1 , color:"#424242"  }}
              textAlign="center"
            >
              Remy Sharp
            </Typography>
            <ArrowForwardIosIcon
              sx={{  display : { xs: 'none' , sm:'block'}   }}

              className="mx-4"
              fontSize="small"
              color="action"
            />

            <HelpCenterOutlinedIcon  
              sx={{  display : { xs: 'none' , sm:'block'}   }}
            color="action" />
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
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
