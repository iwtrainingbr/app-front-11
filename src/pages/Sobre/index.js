// function Sobre() {
//   return (
//     <div>
//       <h1>Sobre We Match!</h1>
//       <p>É uma aplicação multiplataforma de localização de pessoas para serviços de relacionamentos online, cruzando informações do Facebook e do Spotify, localizando as pessoas geograficamente próximas. Esta aplicação está disponível para os sistemas Android e iOS.</p>
//     </div>
//   )
// }
//
// export default Sobre

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sobre from './sobre.png';

export default function ImgMediaCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={sobre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          We Match!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          É uma aplicação multiplataforma de localização de pessoas para serviços de relacionamentos online, cruzando informações do Facebook e do Spotify, localizando as pessoas geograficamente próximas. Esta aplicação está disponível para os sistemas Android e iOS.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartilhar</Button>
        <Button size="small">Saiba mais</Button>
      </CardActions>
    </Card>
  );
}
