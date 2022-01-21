import * as React from 'react';
import {AppBar, Box, Toolbar, LinearProgress, Typography, Button, IconButton} from '@mui/material';
import {BrowserRouter, Link} from "react-router-dom";
import MyRoutes from "./components/MyRoutes";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

import "./styles.css";

import {createTheme, ThemeProvider} from "@mui/material/styles";

export default function App() {

  const myTheme = createTheme({
    palette: {
      primary: {
        main: '#C90011'
      },
      secondary: {
        main: '#00C9B8'
      },
      success: {
        main: '#00645C'
      }
    }
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <Navbar/>

        <MyRoutes/>

          <LinearProgress/>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
