import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./pages/Login";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import Config from "./pages/Config";
import Example from "./pages/Example";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/listar" element={<List/>} />
        <Route path="/config" element={<Config/> }/>
        <Route path="/exemplo" element={<Example/>}/>

        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
