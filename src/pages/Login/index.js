import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import match from './image/match.png';
import './style.css';
import {useState} from "react";



export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  function validar () {

    if(email === ""){
      alert ('preencha o email');
      return;
    }if(senha === ""){
      alert ('preencha a senha');
      return;
    }else{
    navigate ("/")
    }
  } 
  
  

   return (  
    <Box
         sx={{
           backgroundColor:'#454d6b',
           color: '#ffffff',
           p: 2,
         }}

    >
    <form>

          <div className="divhead">
                <img className="img-logo" src={match}/>

                <Typography sx={{ml:5}} variant="h4">
                    Entrar no We Macth!
                </Typography>
          </div>

          <div className="acesso">
            <TextField color="error" style={{marginBottom: 20}} onChange={(event) => setEmail(event.target.value)} value={email} fullWidth label="Nome de usuário, e-mail ou celular" variant="standard" /><br/>
            <TextField color="error" fullWidth label="Senha" onChange={(event) => setSenha(event.target.value)} value={senha} type="password" variant="standard" />  <br/>

          </div>

          <div className="button">
              <Button fullWidth color="error" size="large" onClick={validar} variant="contained">
                <Link to="/">AVANÇAR</Link>
              </Button>
          </div>

          <div align="center" style={{marginTop: 20}}>
              <Link to="/" color="white" underline="none">
                  {'Esqueceu a senha?'}
              </Link>
          </div>
          <div className="button">

            <Button fullWidth color="error" size="large" variant="outlined">
              <Link to="/cadastro">Criar uma conta</Link>
            </Button>

          </div>

    </form>

    </Box>
  );
}
