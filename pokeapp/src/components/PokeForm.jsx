import React, { useState } from 'react'


export const PokeForm = ({ state, setState,setPokemonId }) => {

  const [pokemon, setPokemon] = useState('')

  const handleSubmit = (event) => {
    
    event.preventDefault()

    if (pokemon!=='' && !isNaN(pokemon)) {
    
      if( parseInt(state.id) !== parseInt(pokemon) ){
      
        // Estara cargando por que hará una petición a la API
        setState({
          ...state,
          loading:true,
          error:false
        })
 
       const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon
       setPokemonId( pokemonID )
       setState({
         ...state,
          error:false,
          pokemon:''
        })     
     }
      else{
        setState({
          ...state,
          pokemon: "hola ",
          error: true, 
          loading: false
        })
        setPokemon('')
      }
    }
    setPokemon('')
}

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemon}
        placeholder="Busca tu pokemon"
        //Actualizas el valor del input cuando el usuario teclea
        onChange={(e) => setPokemon(e.target.value)}
        autoComplete="off"/>

      <input type="submit" className="pokemon-btn" value=""/>
    
    </form>
  )
}
