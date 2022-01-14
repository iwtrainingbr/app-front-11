import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography} from '@mui/material';
import styles from './Navbar.module.css'

function Navbar () {
    return (
      <AppBar position="static">
        <Toolbar sx={{bgcolor: '#a13854'}}>

            <Typography>
                  <Link  to="/">
                      {'Inicio'}
                  </Link>
            </Typography>

            <Typography ml={5}>
                  <Link to="/login">
                        {'Login'}
                  </Link>
            </Typography>

            <Typography ml={5}>
                  <Link to="/config">
                      {'Configuração'}
                  </Link>
            </Typography>

            <Typography ml={5}>
                  <Link to="/listar">
                      {'Listar'}
                  </Link>
            </Typography>



        </Toolbar>
      </AppBar>
    )
}

export default Navbar
