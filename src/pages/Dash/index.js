import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {useEffect} from "react";
import {Divider, Typography, Stack,Button,CardActionArea} from '@mui/material';
import {QuestionAnswer, Person, ListAlt} from '@mui/icons-material';
const API_URL = 'https://front-11-project-default-rtdb.firebaseio.com';
export default function Dash() {
  //const [users, setUsers] = useState([]);  
    const urlUsuarios = API_URL+'/users.json'
    const urlperguntas = API_URL+'/questions.json'
    const urlcategorias = API_URL+'/categories.json'
    useEffect(() => {
    fetch(urlUsuarios)
    .then(response => response.json())
    .then(users => {
      document.getElementById('user_dash').innerHTML=Object.keys(users).length;    
    })
    fetch(urlperguntas)
    .then(response => response.json())
    .then(questions => {
      document.getElementById('questions_dash').innerHTML=Object.keys(questions).length;    
    })
    fetch(urlcategorias)
    .then(response => response.json())
    .then(category => {
      document.getElementById('category_dash').innerHTML=Object.keys(category).length;    
    })
})
  return (
    <div>
          <Card style={{marginBottom: 20}}>
            <CardActionArea >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                 <Stack >
                  <Button  variant="contained" color="success">
                   <Typography variant="h1">
                    <strong id="user_dash">0</strong><Person style={{fontSize: 75}}/>
                   </Typography>
                    </Button>
                 </Stack>
                </Typography>
                <Divider/>
                <Typography align="center" variant="h4">
                 <strong>Usuários</strong>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Divider/>
          <Card style={{marginBottom: 20}}>
            <CardActionArea >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                 <Stack >
                  <Button  variant="contained" color="error">
                   <Typography variant="h1">
                    <strong id="questions_dash">0</strong><QuestionAnswer style={{fontSize: 75}}/>
                   </Typography>
                    </Button>
                 </Stack>
                </Typography>
                <Divider/>
                <Typography align="center" variant="h4">
                 <strong>Perguntas</strong>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>  
          <Divider/>
          <Card style={{marginBottom: 20}}>
            <CardActionArea >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                 <Stack >
                  <Button  variant="contained" color="warning">
                   <Typography variant="h1">
                    <strong id="category_dash">0</strong><ListAlt style={{fontSize: 75}}/>
                   </Typography>
                    </Button>
                 </Stack>
                </Typography>
                <Divider/>
                <Typography align="center" variant="h4">
                 <strong>Categorias</strong>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>      
</div>
);
}