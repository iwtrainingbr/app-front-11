import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Login from "./pages/Login";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import Config from "./pages/Config";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
        <Link to="/config">Configuração </Link>
        <Link to="/listar">Listar</Link>
      </div>


      <Routes>
        <Route path="/" element={<h1>Inicio</h1>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/listar" element={<List/>} />
        <Route path="/config" element={<Config/> }/>

        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
