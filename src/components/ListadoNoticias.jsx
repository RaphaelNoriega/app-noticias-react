import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const ListadoNoticias = () => {

    const {noticias,totalNoticias,handleChangePagina,pagina} = useNoticias();

    console.log(noticias)
    console.log(totalNoticias)

    const totalPaginas = Math.ceil(totalNoticias / 20);

    console.log(totalPaginas)

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
            >Tendencias
        </Typography>

        
        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia =>(
                <Noticia
                    key ={noticia.url}
                    noticia={noticia}
                    height={'250'}
                />
            ))}
        </Grid>

        <Stack 
            sx={{marginY:5}}
            spacing={2}
            direction={'row'}
            justifyContent='center'
            alignItems='center'
        >
            <Pagination 
            count={totalPaginas} 
            color="secondary" 
            onChange={handleChangePagina}
            page={pagina}
            />
        </Stack>
    </>

  )
}

export default ListadoNoticias