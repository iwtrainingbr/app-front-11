import {Routes, Route} from "react-router-dom";
import Login from "../../pages/Login";
import Listar from "../../pages/Listar";
import NotFound from "../../pages/NotFound";
import Config from "../../pages/Config";
import Profile from "../../pages/Profile";
import Carrinho from "../../pages/Carrinho";
import ControlledAccordions from "../../pages/Questions";
import Cadastro from "../../pages/Cadastro";
import Sobre from "../../pages/Sobre";
import Cities from "../../pages/Cities";
import Categorias from "../../pages/Categorias";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Inicio</h1>}/>

      <Route path="/login" element={<Login/>} />
      <Route path="/listar" element={<Listar/>} />
      <Route path="/config" element={<Config/> }/>
      <Route path="/profile" element={<Profile/> }/>
      <Route path="/sobre" element={<Sobre/> }/>
      <Route path="/questions" element={<ControlledAccordions/> }/>
      <Route path="/cadastro" element={<Cadastro/> }/>
      <Route path="/carrinho" element={<Carrinho/> }/>
      <Route path="/cidades" element={<Cities/> }/>
      <Route path="/categorias" element={<Categorias/> }/>


      <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}
