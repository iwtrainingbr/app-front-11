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
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';


export default function ImgMediaCard() {
  return (
      <div>
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
        <Link  className="sobreLink" href="https://pt-br.facebook.com/">
            <FacebookIcon sx={{width:90, fontSize: 60}}/>
        </Link>
        <Link className="sobreLink" href="https://www.instagram.com/">
          <InstagramIcon sx={{width: 90, fontSize:60}}/>
        </Link>
        <Link href="https://twitter.com/">
          <TwitterIcon sx={{width: 90, fontSize: 60}}/>
        </Link>
      </CardActions>

    </Card>


    </div>
  );
}
