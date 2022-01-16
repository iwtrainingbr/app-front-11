import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import match from '../Login/image/match.png';
import male from './limage/male.svg';
import female from './limage/female.svg';
import outros from './limage/outros.svg';

export default function Listar() {
  return (
    <div>
    <Card>
            <CardContent align="center" variant="outlined" >
              <CardMedia />
                  <img src={male} width="200" height="200" />
            <Typography  gutterBottom variant="h5" component="div">
              Alessandro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{marginLeft:"auto", marginRight:"auto"}} variant="contained" color="secondary" size="small">Saiba mais</Button>
            <Button style={{marginLeft:"auto", marginRight:"auto"}} variant="contained" color="error" size="small">Descartar</Button>
          </CardActions>
    </Card>

      <Card>
            <CardContent align="center">
                <CardMedia/>
                  <img src={female} width="200" height="200"/>
              <Typography align="center" gutterBottom variant="h5" component="div">
                Mariana
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions align="center">
              <Button style={{marginLeft:"auto", marginRight:"auto"}} variant="contained" color="secondary" size="small">Saiba mais</Button>
              <Button style={{marginLeft:"auto", marginRight:"auto"}} variant="contained" color="error" size="small">Descartar</Button>
            </CardActions>
        </Card>

        <Card>
            <CardContent align="center">
              <CardMedia/> <img src={outros} width="200" height="200"/>
              <Typography gutterBottom variant="h5" component="div">
                Outros
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button  style={{marginLeft:"auto", marginRight:"auto"}} variant="contained" color="secondary" size="small">Saiba mais</Button>
              <Button style={{marginLeft:"auto", marginRight:"auto"}} align="center" variant="contained" color="error" size="small">Descartar</Button>
            </CardActions>
        </Card>



        </div>
  );
}
