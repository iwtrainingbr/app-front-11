
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import match from '../Login/image/match.png';




export default function Cadastro (){
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

                <Typography sx={{ml:5}} variant="h4">
                    FAÇA SEU CADASTRO
                </Typography>
          </div>

          <div className="acesso">
            <TextField color="error"  fullWidth label="NOME" variant="standard" /><br/>
            <TextField color="error" fullWidth label="EMAIL" variant="standard"/> <br/>
            <TextField color="error" fullWidth label="TELEFONE" variant="standard"/> <br/>
            <TextField color="error" fullWidth label="SENHA" variant="standard"/> <br/>

          </div>

          <div className="button">
              <Button fullWidth color="error" size="large" variant="contained">SALVAR</Button>
          </div>


    </form>

    </Box>
    );


}
