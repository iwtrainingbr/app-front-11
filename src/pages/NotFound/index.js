import img from './not.png';
import './style.css';
import {Link} from 'react-router-dom';
import {Button} from "@mui/material";


function NotFound() {
  return (
    <div align="center">
      <h1>Erro, pagina não encontrada</h1>
      <h2>Para voltar ao inicio
        <Button variant="contained">
          <Link to='/'>Click Aqui</Link>
        </Button>
      </h2>
      <img alt="não-encontrado" className='img' src={img}/>
    </div>
  )
}

export default NotFound;
