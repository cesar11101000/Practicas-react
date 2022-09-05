import React from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon'
import { PokedexScreen } from './PokedexScreen'
import { PokeForm } from './PokeForm'

export const Pokedex = () => {

    const { state, pokemon, loading, error, setState, setPokemonId } = useFetchPokemon()
 
    return (
    <>
        <div className="pokedex">
            <div className="pokedex-left">
                <div className="pokedex-left-top">
                    <div className={`light is-sky is-big`}/>
                    <div className="light is-red" />
                    <div className="light is-yellow" />
                    <div className="light is-green" />
                </div>

                <div className="pokedex-screen-container">
                    <PokedexScreen
                        pokemon={pokemon}
                        loading={loading}
                        error={error}
                    />
                </div>
                
                <div className="pokedex-left-bottom">
                    <div className="pokedex-left-bottom-lights">
                        <div className="light is-blue is-medium" />
                        <div className="light is-green is-large" />
                        <div className="light is-orange is-large" />
                    </div>

                    <PokeForm 
                        state={state}
                        setState={setState}
                        setPokemonId={setPokemonId}
                    />
                </div>

            </div>

            <div className="pokedex-right-front" />
            <div className="pokedex-right-back" />
        </div>
    </>
  )
}
