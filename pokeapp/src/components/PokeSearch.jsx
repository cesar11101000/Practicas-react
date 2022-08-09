import React, { useState } from 'react'
import { getGifs } from '../helpers/getPokemon';

export const PokeSearch = () => {

   const [ search, setSearch ] = useState(''); 

   const handleChange = (e) => {
       setSearch( e.target.value )
   }

   const handleSubmit = (e) => {
        e.preventDefault();
        getGifs(search)
        setSearch('');
   }

  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type='text'
            placeholder='Introduce el nombre de un pokemon'
            value={ search }
            onChange={ handleChange }
        />
    </form>
  )
}
