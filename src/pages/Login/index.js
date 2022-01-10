import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import './style.css';


export default function Login() {
  return (
    <Box
        component="form"
       sx={{
         width: 400,
         height: 500,
         backgroundColor:'#454d6b',
         color: '#ffffff',
         ml: 60,
         mt: 10
       }}

    >
    <form>
          <div>
              <h1 className="head">Login</h1>
              <Divider/>
          </div>
          <div className="acesso">
            <TextField color="secondary" fullWidth label="Usuário" variant="standard" /><br/>
            <TextField color="secondary" fullWidth label="Senha" variant="standard"/> <br/>

          </div>

          <div className="button">
              <Button fullWidth color="secondary" size="large" variant="contained">Login</Button>
          </div>
          <div className="ancora" >

              <Link href="#" color="white" underline="none">
                  {'Esqueceu a senha?'}
              </Link>
          </div>


      </form>

    </Box>
  );
}
