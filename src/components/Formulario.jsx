import React from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import useNoticias from '../hooks/useNoticias';


const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {

    const {categoria,handleChangeCategoria} = useNoticias();

  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select 
            label="Categoria"
            onChange={handleChangeCategoria}
            value={categoria}
            >
                {CATEGORIAS.map(categoria => (
                    <MenuItem 
                        key={categoria.value} 
                        value={categoria.value}>
                        {categoria.label}
                    </MenuItem>
                ))}
            </Select>

            <Box sx={{marginTop:2}}>
                <Button
                    fullWidth
                    variant='contained'
                    color='secondary'
                >
                    Buscar Noticias
                </Button>
            </Box>
           
        </FormControl>
    </form>
  )
}

export default Formulario