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
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Carrinho from "./pages/Carrinho";
import ControlledAccordions from "./pages/Questions";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>}/>

        <Route path="/login" element={<Login/>} />
        <Route path="/listar" element={<List/>} />
        <Route path="/config" element={<Config/> }/>
        <Route path="/questions" element={<ControlledAccordions/> }/>


        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
