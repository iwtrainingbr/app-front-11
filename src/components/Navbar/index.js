import * as React from 'react';
import {useLocation} from "react-router-dom";

import {Drawer, AppBar} from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
 import {Link} from 'react-router-dom';
import {
  Info as InfoIcon,
  Help as HelpIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import ListIcon from '@mui/icons-material/List';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import StartIcon from '@mui/icons-material/Start';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {
  const url = useLocation();
  const [sidebar, setSidebar] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  if (['/login', '/cadastro'].includes(url.pathname)) {
    return (<></>);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer onClose={handleSidebar} open={sidebar} style={{width: 400}}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
   <nav aria-label="main mailbox folders">
     <List>
       <ListItem disablePadding>
         <ListItemButton onClick={handleSidebar}>
           <ListItemIcon>
             <StartIcon />
           </ListItemIcon>
                <Link to="/">
                  <ListItemText primary="Início"/>
               </Link>
         </ListItemButton>
       </ListItem>
         <ListItem disablePadding>
           <ListItemButton onClick={handleSidebar}>
             <ListItemIcon>
               <HowToRegIcon />
             </ListItemIcon>
                 <Link to="/Cadastro">
                      <ListItemText primary="Cadastro"/>
                 </Link>
           </ListItemButton>
         </ListItem>
           <ListItem disablePadding>
             <ListItemButton onClick={handleSidebar}>
               <ListItemIcon>
                 <ListIcon />
               </ListItemIcon>
               <Link to="listar">
                <ListItemText primary="Listar Perfis" />
               </Link>
             </ListItemButton>
           </ListItem>
             <ListItem disablePadding>
               <ListItemButton onClick={handleSidebar}>
                 <ListItemIcon>
                   <SettingsIcon />
                 </ListItemIcon>
                 <Link to="/Config">
                 <ListItemText primary="Configuração" />
                 </Link>
               </ListItemButton>
             </ListItem>
               <ListItem disablePadding>
                 <ListItemButton onClick={handleSidebar}>
                   <ListItemIcon>
                     <HelpIcon />
                   </ListItemIcon>
                   <Link to="/questions">
                   <ListItemText primary="Ajuda" />
                   </Link>
                 </ListItemButton>
               </ListItem>
                 <ListItem disablePadding>
                   <ListItemButton onClick={handleSidebar}>
                     <ListItemIcon>
                       <InfoIcon />
                     </ListItemIcon>
                     <Link to="/Sobre">
                     <ListItemText primary="Sobre o App" />
                     </Link>
                   </ListItemButton>
                 </ListItem>
                   <ListItem disablePadding>
                     <ListItemButton onClick={handleSidebar}>
                       <ListItemIcon>
                         <LogoutIcon />
                       </ListItemIcon>
                       <Link to="/Sair">
                       <ListItemText primary="Sair" />
                       </Link>
                     </ListItemButton>
                   </ListItem>
                   </List>
       </nav>
       </Box>
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            we match
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
