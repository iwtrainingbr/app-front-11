import {Routes, Route} from "react-router-dom";
import Login from "../../pages/Login";
import List from "../../pages/List";
import NotFound from "../../pages/NotFound";
import Config from "../../pages/Config";
import Example from "../../pages/Example";
import Profile from "../../pages/Profile";
import Carrinho from "../../pages/Carrinho";
import ControlledAccordions from "../../pages/Questions";
import Cadastro from "../../pages/Cadastro";
import Sobre from "../../pages/Sobre";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Inicio</h1>}/>

      <Route path="/login" element={<Login/>} />
      <Route path="/listar" element={<List/>} />
      <Route path="/config" element={<Config/> }/>
      <Route path="/profile" element={<Profile/> }/>
      <Route path="/sobre" element={<Sobre/> }/>
      <Route path="/questions" element={<ControlledAccordions/> }/>
      <Route path="/cadastro" element={<Cadastro/> }/>
      <Route path="/carrinho" element={<Carrinho/> }/>


      <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}
