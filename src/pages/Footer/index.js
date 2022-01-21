import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import match from '../Login/image/match.png';
import facebook from '../Login/image/facebook.png';
import instagram from '../Login/image/instagram.png';

const Img = styled('img')({
  margin: 'auto',
  paddingTop: 30,
  display: 'block',
  width: 50,
  height: 30,

});

function Footer () {

    return <footer>
            <Box sx={{backgroundColor: '#454d6b'}}>
            <Grid container>
                  <Grid item xs={3} alignItems="center">
                  <img src={match} width="200" height="100"/>
                  </Grid>

                  <Grid item xs={3}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Login"/>
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Cadastro"/>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  </Grid>


                  <Grid item xs={3}>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Configuração"/>
                          </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Ajuda"/>
                          </ListItemButton>
                        </ListItem>
                      </List>
                  </Grid>

                  <Grid item sx={3}>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                            <Img src={facebook}/>
                            </ListItemIcon>
                          </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                            <Img src={instagram}/>
                            </ListItemIcon>
                          </ListItemButton>
                        </ListItem>
                      </List>
                  </Grid>
              </Grid>
                  </Box>


    </footer>
}

export default Footer
