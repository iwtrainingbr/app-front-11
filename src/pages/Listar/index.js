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
import outros from './limage/outros.svg'

export default function Listar() {
  return (
    <div>
    <Card>
            <CardContent variant="outlined" >
              <CardMedia/><img src={male}/>
            <Typography align="center" gutterBottom variant="h5" component="div">
              Alessandro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">Saiba mais</Button>
            <Button variant="outlined" color="error" size="small">Descartar</Button>
          </CardActions>
    </Card>

      <Card>
            <CardContent>
                <CardMedia/> <img src={female}/>
              <Typography align="center" gutterBottom variant="h5" component="div">
                Mariana
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">Saiba mais</Button>
              <Button variant="outlined" color="error" size="small">Descartar</Button>
            </CardActions>
        </Card>

        <Card>
            <CardContent>
              <CardMedia/> <img src={outros}/>
              <Typography align="center" gutterBottom variant="h5" component="div">
                Outros
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">Saiba mais</Button>
              <Button variant="outlined" color="error" size="small">Descartar</Button>
            </CardActions>
        </Card>



        </div>
  );
}
