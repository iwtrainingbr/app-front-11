import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Login from "./pages/Login";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import Config from "./pages/Config";
import Example from "./pages/Example";
import Carrinho from "./pages/Carrinho";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
        <Link to="/config">Configuração </Link>
        <Link to="/listar">Listar</Link>
        <Link to="/exemplo">Exemplo</Link>
        <Link to="/carrinho">Carrinho</Link>
      </div>

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>}/>
        <Route path="/carrinho" element={<Carrinho/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/listar" element={<List/>} />
        <Route path="/config" element={<Config/> }/>
        <Route path="/exemplo" element={<Example/>}/>

        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
