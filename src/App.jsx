import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { NoticiasProvider } from './context/NoticiasProvider';
import Formulario from './components/Formulario'; 
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  
  return (
    <NoticiasProvider>
      <Container>
      <header>
        <Typography align='center' marginY={5} component="h1" variant="h3">EL IMPARCIAL</Typography>
      </header>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Formulario/>
        </Grid>
      </Grid>

      <ListadoNoticias/>
      
    </Container>
    </NoticiasProvider>
  )
}

export default App
