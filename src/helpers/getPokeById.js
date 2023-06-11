export const getPokeById = (id) => {

    const pokemones = localStorage.getItem('pokemones');
    const pokemonesArray = JSON.parse(pokemones);

    const pokemon = pokemonesArray.find((pokemon) => 
      pokemon.order === parseInt(id)
    )

    return pokemon
  }