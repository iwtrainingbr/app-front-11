import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import Config from "./pages/Config";
import Example from "./pages/Example";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Carrinho from "./pages/Carrinho";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Box
            sx=
              {{
                flexGrow: 1,
                width: 400,
                ml: 10

              }}>
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
        </Box>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>}/>

        <Route path="/login" element={<Login/>} />
        <Route path="/listar" element={<List/>} />
        <Route path="/config" element={<Config/> }/>


        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
