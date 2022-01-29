
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import match from '../Login/image/match.png';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



export default function Cadastro (){
  const navigate = useNavigate();
  const [nome,setNome] = useState("");
  const [email,setEmail] = useState("");
  const [telefone,setTelefone] = useState("");
  const [senha,setSenha] = useState("");
 const [open, setOpen] = useState(false);


 const handleClick = () => {
   setOpen(true);
 };

 const handleClose = (event, reason) => {
   if (reason === 'clickaway') {
     return;
   }

 setOpen(false);

};

  function alterarNome (event) {
    setNome(event.target.value);
  }

  function alterarEmail (event) {
    setEmail(event.target.value);

  }

  function alterarTelefone (event) {
    setTelefone(event.target.value);
  }

  function alterarSenha (event) {
    setSenha(event.target.value);
  }


  function validar () {

    if (nome === ""){
      handleClick();
      return
    }if(email=== ""){
      alert ('Preencha o Email');
      return
    }if(telefone=== ""){
      alert ('Preencha o Telefone');
      return
    }if(senha=== ""){
      alert ('Preencha a Senha')
    }else{
      navigate("/")
    }
  }


  return (


    <Box
         sx={{
           backgroundColor:'#ffcccc',
           color: 'aaaaaa',
           p: 2,
         }}
    >

    <form>

          <div className="divhead">
                <img src={match}/>


                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                     <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                       This is a success message!
                     </Alert>
                   </Snackbar>
                <Typography sx={{ml:5}} variant="h4">
                    FAÇA SEU CADASTRO
                </Typography>
          </div>

          <div className="acesso">
            <TextField color="error" id="nome" fullWidth label="NOME COMPLETO" value={nome} onChange={alterarNome} variant="standard"/><br/>
            <TextField color="error" id="email" fullWidth label="EMAIL" value={email} onChange={alterarEmail} variant="standard"/> <br/>
            <TextField color="error" id="telefone" fullWidth label="TELEFONE" value={telefone} onChange={alterarTelefone} variant="standard"/> <br/>
            <TextField color="error" id="senha" fullWidth label="SENHA"  value={senha} onChange={alterarSenha} variant="standard"/> <br/>

          </div>

          <div className="button">
              <Button fullWidth color="error" id="salvar" size="large" variant="contained" onClick={validar}>SALVAR</Button>
          </div>
    </form>
    </Box>
    );



}
