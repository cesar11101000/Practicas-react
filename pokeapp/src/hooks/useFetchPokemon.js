import { useEffect, useState } from "react"

 
 export const useFetchPokemon = () => {

    const [state, setState] = useState({
        error: false,
        loading: true,
        pokemon: null,
        id: null
    })

    const RandomId = Math.floor( Math.random() * 806 + 1)

    // Inicamos con ID random para siempre tener un pokemón
    const [ pokemonID, setPokemonId ] = useState(RandomId)

    // Solamente esta cargando mientras hacemos la petición,
    // cuando esta se resuelve o fue un éxito u un error.

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
            .then( res => res.json())
            .then( data => {
                // Si todo esta cool, actualizamos el pokemón
                // Y le indicamos que no hay error
                setState({
                    ...state,
                    loading: false,
                    pokemon: data,
                    id: pokemonID
                })
            })
            .catch( err => {
                setState({
                    ...state,
                    loading: false,
                    error: true,
                    id: pokemonID
                })
            })
    }, [ pokemonID ])

    return { 
        ...state,
        state,
        setState,
        setPokemonId
    }
    
 }