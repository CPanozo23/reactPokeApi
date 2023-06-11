import axios from 'axios'
import { useEffect, useState } from 'react'
import { PokemonList } from '../components/PokemonList'
 
export const Pokemones = () =>  {
  
  const init = localStorage.getItem('pokemones') ? JSON.parse(localStorage.getItem('pokemones')) : []

  const [pokemones, setPokemones] = useState(init)

  useEffect(() => {
    const fetchPokemones = async () => {
      try {
        const newPokemones = [];
        for (let i = 1; i < 21; i++) {
          const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
          console.log(data.name + " imprime versión: " + i);
          newPokemones.push(data);
        }
        setPokemones(newPokemones);
        localStorage.setItem('pokemones', JSON.stringify(newPokemones));
    
        console.log(newPokemones);
        console.log("cantidad: " + newPokemones.length);
      } catch (error) {
        console.error(error);
      }
    }

    if (init.length===0){
      fetchPokemones()
    }else{
      setPokemones(init)
    }

    
  }, [])


  return(
    <>
      <h2 className='pt-3'>Pokemones</h2>
      <div className='d-flex justify-content-center align-items-center row'>
      {pokemones.map((pokemon) => (
          <PokemonList pokemon={pokemon} key={pokemon.order} />
        ))}
      </div>
      
    </>
  )
}


