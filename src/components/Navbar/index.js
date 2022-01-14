// import {Link} from 'react-router-dom';
// import {AppBar, Toolbar, Typography} from '@mui/material';
// import styles from './Navbar.module.css'
//
// function Navbar () {
//     return (
//       <AppBar position="static">
//         <Toolbar sx={{bgcolor: '#a13854'}}>
//
//             <Typography>
//                   <Link  to="/">
//                       {'Inicio'}
//                   </Link>
//             </Typography>
//
//             <Typography ml={5}>
//                   <Link to="/login">
//                         {'Login'}
//                   </Link>
//             </Typography>
//
//             <Typography ml={5}>
//                   <Link to="/config">
//                       {'Configuração'}
//                   </Link>
//             </Typography>
//
//             <Typography ml={5}>
//                   <Link to="/listar">
//                       {'Listar'}
//                   </Link>
//             </Typography>
//
//
//
//         </Toolbar>
//       </AppBar>
//     )
// }
//
// export default Navbar


import * as React from 'react';
import {Drawer} from "@mui/material";
import AppBar from '@mui/material/AppBar';
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

export default function Navbar() {
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer onClose={handleSidebar} open={sidebar} style={{width: 400}}>
          MENU
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
